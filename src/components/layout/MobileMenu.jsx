import React, { useState } from 'react';
import { ContactOptions } from './ContactOptions';
import { Logo } from './Logo';

export const MobileMenu = ({ showPage, toggleMobileMenu }) => {
  const [showContact, setShowContact] = useState(false);

  const headerRow = { height: 'var(--header-h)', marginTop: 'calc(-1 * var(--header-h))' };

  return (
    <div id="mobile-menu" className="overlay active fixed inset-0 z-50 bg-[var(--color-bg-primary)] px-4" style={{ paddingTop: 'var(--header-h)' }}>
      <div className="min-h-dvh w-full overflow-x-clip">
        <div
          className="flex w-[200%] min-h-dvh transition-transform duration-300 ease-out"
          style={{ transform: showContact ? 'translateX(-50%)' : 'translateX(0)' }}
        >
          <div className="w-1/2 flex flex-col" aria-hidden={showContact} {...(showContact ? { inert: '' } : {})}>
            <div className="grid grid-cols-3 items-center mb-3" style={headerRow}>
              <button onClick={toggleMobileMenu} className="justify-self-start p-2 -ml-2 cursor-pointer" aria-label="Close menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Logo
                className="justify-self-center"
                onClick={(e) => { e.preventDefault(); showPage('home'); toggleMobileMenu(); }}
              />
              <div className="justify-self-end w-10 h-full"></div>
            </div>
            <div className="flex-1 w-full flex flex-col items-center gap-2 text-center pt-1">
              <a
                href="#/"
                className="title-medium uppercase py-2 cursor-pointer"
                onClick={(e) => { e.preventDefault(); showPage('home'); toggleMobileMenu(); }}
              >
                Work
              </a>
              <a
                href="#/about-me"
                className="title-medium uppercase py-2 cursor-pointer"
                onClick={(e) => { e.preventDefault(); showPage('about-me'); toggleMobileMenu(); }}
              >
                About me
              </a>
              <button
                type="button"
                onClick={() => setShowContact(true)}
                aria-haspopup="true"
                aria-expanded={showContact}
                className="title-medium uppercase py-2 flex items-center gap-1 cursor-pointer"
              >
                Contact
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col" aria-hidden={!showContact} {...(showContact ? {} : { inert: '' })}>
            <div className="grid grid-cols-3 items-center mb-3" style={headerRow}>
              <button onClick={() => setShowContact(false)} className="justify-self-start p-2 -ml-2 cursor-pointer" aria-label="Back to menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="justify-self-center title-medium uppercase">Contact</span>
              <div className="justify-self-end w-10 h-full"></div>
            </div>
            <div className="flex-1 w-full flex flex-col items-center pt-1">
              <div className="w-full max-w-xs text-left" role="menu">
                <ContactOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
