import React from 'react';

export const Footer = React.memo(() => (
  <footer className="px-4 md:px-8 lg:px-12 py-8">
    <div className="max-w-7xl mx-auto">
      <p className="body-xsmall text-[var(--color-text-tertiary)] text-center">
        This site was produced by Amy Carmichael in association with Claude Code.
      </p>
      <p className="body-xsmall text-[var(--color-text-tertiary)] text-center mt-1">
        © 2026 Amy Carmichael. All rights reserved.
      </p>
    </div>
  </footer>
));
