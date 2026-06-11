import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import ErrorBoundary from './components/ErrorBoundary';

// Import page components directly for now (lazy loading can be added later)
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { MeezPage } from './pages/MeezPage';
import { NetflixPage } from './pages/NetflixPage';
import { MeezGate } from './components/MeezGate';
import './global.css';

const App = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const mainContentRef = useRef(null);
    const mobileMenuButtonRef = useRef(null);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);
    
    useEffect(() => {
        const mainContent = mainContentRef.current;
        const focusTarget = mobileMenuButtonRef.current;
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            if (mainContent) {
                mainContent.setAttribute('aria-hidden', 'true');
                mainContent.setAttribute('inert', '');
            }
            setTimeout(() => {
                const closeBtn = document.querySelector('#mobile-menu button[aria-label="Close menu"]');
                closeBtn?.focus();
            }, 0);
        } else {
            document.body.style.overflow = '';
            if (mainContent) {
                mainContent.removeAttribute('aria-hidden');
                mainContent.removeAttribute('inert');
            }
            focusTarget?.focus();
        }
        if (focusTarget) {
            focusTarget.setAttribute('aria-expanded', String(isMobileMenuOpen));
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) toggleMobileMenu();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen, toggleMobileMenu]);

    const showPage = useCallback((page) => {
        setActivePage(page);
        window.scrollTo(0, 0);
        try {
            window.location.hash = `#/${page}`;
        } catch { /* ignore */ }
    }, []);
    
    useEffect(() => {
        const parseHash = () => {
            const raw = (window.location.hash || '').replace(/^#\/?/, '');
            if (!raw) {
                setActivePage('home');
                return;
            }
            const [page] = raw.split('/');
            if (page) setActivePage(page);
        };

        parseHash();
        window.addEventListener('hashchange', parseHash);
        return () => window.removeEventListener('hashchange', parseHash);
    }, []);

    const pages = {
        home: <HomePage />,
        work: <WorkPage showPage={showPage} />,
        about: <AboutPage />,
        meez: <MeezGate><MeezPage /></MeezGate>,
        netflix: <NetflixPage />,
    };

    return (
        <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-dvh relative z-10">
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--color-accent-primary)] text-white px-4 py-2 rounded z-50"
            >
                Skip to main content
            </a>
            <Header
                showPage={showPage}
                toggleMobileMenu={toggleMobileMenu}
                activePage={activePage}
                mobileMenuButtonRef={mobileMenuButtonRef}
            />

            {isMobileMenuOpen && (
                <MobileMenu
                    showPage={showPage}
                    toggleMobileMenu={toggleMobileMenu}
                />
            )}

            <main id="main-content" ref={mainContentRef} className="px-4 md:px-8 lg:px-12 pt-[var(--header-h)]">
                <div className="max-w-7xl mx-auto">
                    <ErrorBoundary>
                        {pages[activePage]}
                    </ErrorBoundary>
                </div>
            </main>

        </div>
    );
};

export default App;