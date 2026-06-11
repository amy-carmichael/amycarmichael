import React, { useState } from 'react';

export const EMAIL = 'amycarmichaelprod@gmail.com';

export const ContactOptions = ({ onSchedule }) => {
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

            <button
                type="button"
                role="menuitem"
                onClick={onSchedule}
                className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left body-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-secondary)] cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 15H6c-.55 0-1-.45-1-1V9h14v9c0 .55-.45 1-1 1zm-7-5h5v3h-5z" />
                </svg>
                Schedule a meeting
            </button>
        </>
    );
};
