# IGEE Portal

Site vitrine construit avec:

- Next.js + TypeScript
- Tailwind CSS
- next-intl (fr/en/de)
- next-themes (dark/light)
- react-select (selecteur de langue)

## Demarrage

Prerequis:

- Node.js 18.18+ (ou 20+ recommande)
- npm

Commandes:

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

Notes i18n:

- langue par defaut: `de`
- preference utilisateur en cookie `IGEE_LOCALE` + localStorage `igee_locale`

## Structure rapide

- `src/app/[locale]/page.tsx`: page d'accueil
- `src/messages/*.json`: traductions
- `src/components/locale-switcher.tsx`: switch langue
- `src/components/theme-toggle.tsx`: switch dark/light
- `src/app/globals.css`: variables de couleurs et styles globaux
