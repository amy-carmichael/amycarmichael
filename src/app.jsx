import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import ErrorBoundary from './components/ErrorBoundary';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NetflixPage } from './pages/NetflixPage';
import { FiltersPage } from './pages/work/FiltersPage';
import { ServerCardsPage } from './pages/work/ServerCardsPage';
import { InventoryPage } from './pages/work/InventoryPage';
import { DesignSystemPage } from './pages/work/DesignSystemPage';
import { MeezGate } from './components/MeezGate';

// Every navigable route. Anything else (unknown hash, or the legacy #/work that
// was merged into home) falls back to 'home' so nav active-states stay correct.
const KNOWN_ROUTES = new Set([
    'home', 'about-me', 'netflix',
    'work/filters', 'work/server-cards', 'work/inventory', 'work/design-system',
]);

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
            const raw = (window.location.hash || '').replace(/^#\/?/, '').replace(/\/$/, '');
            setActivePage(KNOWN_ROUTES.has(raw) ? raw : 'home');
        };

        parseHash();
        window.addEventListener('hashchange', parseHash);
        return () => window.removeEventListener('hashchange', parseHash);
    }, []);

    const renderPage = () => {
        switch (activePage) {
            case 'about-me': return <AboutPage />;
            case 'netflix': return <NetflixPage />;
            case 'work/filters': return <MeezGate><FiltersPage showPage={showPage} /></MeezGate>;
            case 'work/server-cards': return <MeezGate><ServerCardsPage showPage={showPage} /></MeezGate>;
            case 'work/inventory': return <MeezGate><InventoryPage showPage={showPage} /></MeezGate>;
            case 'work/design-system': return <MeezGate><DesignSystemPage showPage={showPage} /></MeezGate>;
            case 'home': return <HomePage showPage={showPage} />;
            default: return <HomePage showPage={showPage} />;
        }
    };

    return (
        <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-dvh flex flex-col relative z-10">
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

            <main id="main-content" ref={mainContentRef} className="flex-1 px-4 md:px-8 lg:px-12 pt-[var(--header-h)]">
                <div className="max-w-7xl mx-auto">
                    <ErrorBoundary>
                        {renderPage()}
                    </ErrorBoundary>
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default App;