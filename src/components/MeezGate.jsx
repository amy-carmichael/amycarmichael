import React, { useState, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// CHANGE THE PASSWORD HERE
// Note: this is a casual, client-side gate. The password and the page content
// both ship in the JS bundle, so this keeps casual visitors out but is NOT
// real security against a technical person.
const MEEZ_PASSWORD = 'Jupiter';
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'meez-unlocked';

export const MeezGate = ({ children }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  // Remember a previously-unlocked visitor.
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === MEEZ_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) return children;

  return (
    <div className="flex items-center justify-center" style={{ minHeight: '60vh' }}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[var(--color-bg-white)] rounded-[8px] p-8 shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
      >
        <h2 className="headline-medium text-[var(--color-text-primary)] mb-2">Protected project</h2>
        <p className="body-small text-[var(--color-text-secondary)] mb-6">
          Please enter the password to view this project.
        </p>

        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          placeholder="Password"
          aria-label="Password"
          aria-invalid={error}
          className="w-full px-4 py-3 rounded-[4px] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] outline-none border border-transparent focus:border-[var(--color-accent-primary)] transition-colors"
        />

        {error && (
          <p className="body-small text-[var(--color-error)] mt-2" role="alert">
            Incorrect password. Try again.
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-6 px-4 py-3 rounded-[100px] border border-[var(--color-text-tertiary)] text-[var(--color-text-tertiary)] transition-colors hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] cursor-pointer"
        >
          View project
        </button>
      </form>
    </div>
  );
};
