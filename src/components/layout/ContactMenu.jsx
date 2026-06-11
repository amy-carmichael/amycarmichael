import React, { useEffect, useRef, useState } from 'react';
import { ScheduleMeetingModal } from '../modals/ScheduleMeetingModal';
import { ContactOptions } from './ContactOptions';

// "Contact" nav CTA: a caret button that opens a small dropdown with two
// actions — copy email to clipboard, or open the Calendly scheduling modal.
export const ContactMenu = () => {
    const [open, setOpen] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const wrapRef = useRef(null);

    // Close the dropdown on outside click or Escape.
    useEffect(() => {
        if (!open) return;
        const onDown = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('mousedown', onDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const openSchedule = () => {
        setOpen(false);
        setShowSchedule(true);
    };

    return (
        <div className="relative" ref={wrapRef}>
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={open}
                className="nav-link flex items-center gap-1 button uppercase cursor-pointer"
            >
                Contact
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {open && (
                <div
                    role="menu"
                    className="absolute right-0 top-full mt-2 w-72 rounded-md bg-[var(--color-bg-white)] p-2 shadow-[0_4px_12px_rgba(0,0,0,0.12)] z-50"
                >
                    <ContactOptions onSchedule={openSchedule} />
                </div>
            )}

            {showSchedule && <ScheduleMeetingModal closeModal={() => setShowSchedule(false)} />}
        </div>
    );
};
