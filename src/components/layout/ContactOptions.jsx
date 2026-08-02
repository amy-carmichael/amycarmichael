import React, { useState } from 'react';

// Stored base64-encoded so the plaintext "name@domain" string never appears in
// the source or the built JS bundle, where email harvesters scan for it. Decoded
// at runtime only when the Contact menu is opened.
export const EMAIL = atob('YW15Y2FybWljaGFlbHByb2RAZ21haWwuY29t');

// A social/contact row in the menu — icon + label, opens in a new tab.
const ContactLink = ({ href, label, className = '', children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        role="menuitem"
        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left body-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-secondary)] cursor-pointer ${className}`}
    >
        {children}
        {label}
    </a>
);

export const ContactOptions = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* clipboard unavailable — no-op */
        }
    };

    return (
        <>
            <div className="flex items-center justify-between gap-2 rounded-lg px-3 py-2">
                <span className="body-medium text-[var(--color-text-primary)] truncate">{EMAIL}</span>
                <button
                    type="button"
                    onClick={copyEmail}
                    title={copied ? 'Copied!' : 'Copy email'}
                    aria-label="Copy email address"
                    className="shrink-0 rounded p-1.5 text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-secondary)] cursor-pointer"
                >
                    {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm4 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z" />
                        </svg>
                    )}
                </button>
            </div>

            <ContactLink href="https://www.linkedin.com/in/amy-carms/" label="LinkedIn" className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 11.002-3.096 1.548 1.548 0 01-.002 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.527-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                </svg>
            </ContactLink>

            <ContactLink href="https://github.com/amy-carmichael/amycarmichael" label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                </svg>
            </ContactLink>
        </>
    );
};
