import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const CAL_URL = 'https://calendly.com/amycarmichaelprod';
const SCRIPT_ID = 'calendly-widget-js';
const CSS_ID = 'calendly-widget-css';

export const ScheduleMeetingModal = ({ closeModal }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!document.getElementById(CSS_ID)) {
            const link = document.createElement('link');
            link.id = CSS_ID;
            link.rel = 'stylesheet';
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            document.head.appendChild(link);
        }
        if (!document.getElementById(SCRIPT_ID)) {
            const script = document.createElement('script');
            script.id = SCRIPT_ID;
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }

        let cancelled = false;
        const timer = setInterval(() => {
            if (cancelled) return;
            if (window.Calendly && containerRef.current) {
                clearInterval(timer);
                containerRef.current.innerHTML = '';
                window.Calendly.initInlineWidget({ url: CAL_URL, parentElement: containerRef.current });
            }
        }, 100);

        return () => {
            cancelled = true;
            clearInterval(timer);
        };
    }, []);

    return createPortal(
        <div className="modal active fixed inset-0 z-[60]">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
            <div
                className="relative w-full max-w-lg bg-[var(--color-bg-primary)] rounded-2xl shadow-2xl m-4 flex flex-col overflow-hidden"
                style={{ maxHeight: '90vh' }}
            >
                <div className="flex items-center justify-between px-6 py-4">
                    <h3 className="title-large">Schedule a Meeting</h3>
                    <button
                        onClick={closeModal}
                        title="Close"
                        aria-label="Close"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-transparent border-0 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div
                    ref={containerRef}
                    className="w-full"
                    style={{ minWidth: '280px', height: 'min(700px, 78vh)' }}
                >
                    <div className="flex h-full w-full items-center justify-center px-6 text-center">
                        <p className="body-small text-[var(--color-text-secondary)]">
                            Loading scheduler…{' '}
                            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="underline">
                                open in a new tab
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
