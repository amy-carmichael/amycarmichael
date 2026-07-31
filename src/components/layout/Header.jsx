import React from 'react';
import { ContactMenu } from './ContactMenu';
import { Logo } from './Logo';

export const Header = React.memo(({ showPage, toggleMobileMenu, activePage, mobileMenuButtonRef }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)] px-4 md:px-8 lg:px-12 shadow-[var(--shadow-xs)]" style={{ height: 'var(--header-h)' }}>
    <div className="h-full max-w-7xl mx-auto">
      <nav className="flex items-center h-full" role="navigation" aria-label="Main navigation">
        <div className="hidden md:grid md:w-full md:grid-cols-3 md:items-center">
          <div className="flex items-center justify-self-start">
            <a
              href="#/"
              className={`nav-link button uppercase ${activePage === 'home' || activePage.startsWith('work/') || activePage === 'netflix' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); showPage('home'); }}
            >
              Work
            </a>
            <a
              href="#/about-me"
              className={`nav-link button uppercase ${activePage === 'about-me' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); showPage('about-me'); }}
            >
              About me
            </a>
          </div>

          <Logo
            className="justify-self-center"
            onClick={(e) => { e.preventDefault(); showPage('home'); }}
          />

          <div className="justify-self-end">
            <ContactMenu />
          </div>
        </div>
        
        <div className="md:hidden flex items-center justify-between w-full relative">
          <button
            ref={mobileMenuButtonRef}
            id="mobile-menu-button"
            className="p-2 cursor-pointer"
            aria-label="Open menu"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
            </svg>
          </button>
          
          <Logo
            className="absolute left-1/2 -translate-x-1/2"
            onClick={(e) => { e.preventDefault(); showPage('home'); }}
          />

          <div className="w-10"></div>
        </div>
      </nav>
    </div>
  </header>
));