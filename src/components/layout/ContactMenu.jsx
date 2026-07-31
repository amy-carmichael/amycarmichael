import React, { useEffect, useRef, useState } from 'react';
import { ContactOptions } from './ContactOptions';

export const ContactMenu = () => {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

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

    return (
        <div className="relative" ref={wrapRef}>
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={open}
                className="group nav-link flex items-center gap-1 button uppercase cursor-pointer"
            >
                Contact
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-all duration-200 group-hover:text-[var(--color-accent-secondary)] ${open ? 'rotate-180' : ''}`}
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
                    className="absolute right-0 top-full mt-2 w-72 rounded-md bg-[var(--color-bg-white)] p-2 shadow-[var(--shadow-md)] z-50"
                >
                    <ContactOptions />
                </div>
            )}
        </div>
    );
};
