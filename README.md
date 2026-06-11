# amy-portfolio

Personal portfolio site for Amy Carmichael, Senior Product Designer.
Built with React + Vite and Tailwind CSS.

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Notes

- The meez case study is behind a casual client-side password gate
  (`src/components/MeezGate.jsx`). This is not real security — the password
  ships in the bundle — so don't gate anything sensitive with it.
- Deploy the built `dist/` only. Keep the source repo private (it contains the
  résumé PDF and other personal assets).
