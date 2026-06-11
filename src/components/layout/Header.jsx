import React from 'react';
import { ContactMenu } from './ContactMenu';

export const Header = React.memo(({ showPage, toggleMobileMenu, activePage, mobileMenuButtonRef }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)] px-4 md:px-8 lg:px-12" style={{ height: 'var(--header-h)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)' }}>
    <div className="h-full" style={{ maxWidth: '1024px', margin: '0 auto' }}>
      <nav className="flex items-center h-full" role="navigation" aria-label="Main navigation">
        {/* Desktop Navigation — links left, logo centered, contact right */}
        <div className="hidden md:grid md:w-full md:grid-cols-3 md:items-center">
          {/* Left - page links */}
          <div className="flex items-center justify-self-start">
            <a
              href="#/work"
              className={`nav-link button uppercase ${activePage === 'work' || activePage === 'meez' || activePage === 'netflix' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); showPage('work'); }}
            >
              Work
            </a>
            <a
              href="#/about"
              className={`nav-link button uppercase ${activePage === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); showPage('about'); }}
            >
              About me
            </a>
          </div>

          {/* Center - logo */}
          <a
            href="#/"
            className="logo cursor-pointer justify-self-center"
            onClick={(e) => { e.preventDefault(); showPage('home'); }}
            aria-label="Amy Carmichael - Home"
          >
            <span className="text-[var(--color-text-primary)]">amy</span>
            <span className="logo-gradient">carmichael</span>
          </a>

          {/* Right - contact */}
          <div className="justify-self-end">
            <ContactMenu />
          </div>
        </div>
        
        {/* Mobile Navigation */}
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
          
          <a
            href="#/"
            className="logo absolute left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={(e) => { e.preventDefault(); showPage('home'); }}
            aria-label="Amy Carmichael - Home"
          >
            <span className="text-[var(--color-text-primary)]">amy</span>
            <span className="logo-gradient">carmichael</span>
          </a>
          
          <div className="w-10"></div>
        </div>
      </nav>
    </div>
  </header>
));