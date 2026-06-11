import React, { useState } from 'react';

export const EMAIL = 'amycarmichaelprod@gmail.com';

// Shared contact actions — copy email to clipboard, or trigger scheduling.
// Used by both the desktop dropdown (ContactMenu) and the mobile Contact
// sub-view (MobileMenu). The parent supplies `onSchedule`.
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
            {/* Email + copy */}
            <div className="flex items-center justify-between gap-2 rounded-lg px-3 py-2">
                <span className="body-medium text-[var(--color-text-primary)] truncate">{EMAIL}</span>
                <button
                    type="button"
                    onClick={copyEmail}
                    title={copied ? 'Copied!' : 'Copy email'}
                    aria-label="Copy email address"
                    className="shrink-0 rounded p-1.5 text-[var(--color-text-secondary)] transition-colors hover:bg-[rgba(106,103,255,0.1)] hover:text-[var(--color-text-primary)] cursor-pointer"
                >
                    {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <rect x="9" y="9" width="11" height="11" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Schedule */}
            <button
                type="button"
                role="menuitem"
                onClick={onSchedule}
                className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left body-medium text-[var(--color-text-primary)] hover:bg-[rgba(106,103,255,0.1)] cursor-pointer"
            >
                {/* MUI InsertInvitationRounded */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 15H6c-.55 0-1-.45-1-1V9h14v9c0 .55-.45 1-1 1zm-7-5h5v3h-5z" />
                </svg>
                Schedule a meeting
            </button>
        </>
    );
};
