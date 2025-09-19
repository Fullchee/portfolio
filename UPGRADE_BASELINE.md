# Next.js Upgrade Baseline Documentation

## Current Package Versions (Before Upgrade)

### Core Dependencies

- next: ^14.1.0
- react: ^18.2.0
- react-dom: ^18.2.0
- next-seo: ^4.17.0

### Development Dependencies

- @types/node: ^20.11.19
- @types/react: ^18.0.17
- @types/react-dom: ^18.0.6
- typescript: ^5.3.3
- eslint-config-next: ^14.1.0
- eslint: ^8.21.0
- @typescript-eslint/eslint-plugin: ^5.33.0
- @typescript-eslint/parser: ^5.33.0
- tailwindcss: ^3.1.8
- postcss: ^8.4.35
- autoprefixer: ^10.4.8
- prettier: ^3.2.5
- husky: ^8.0.0
- sharp: ^0.33.2

## Current Git State

- Branch: nextjs-15-upgrade (created from main)
- Date: $(date)

## Node.js Environment

- Node.js: v22.16.0
- npm: 10.9.2

## Current Working State

This baseline was created before starting the Next.js 14.1.0 to 15.5.3 upgrade process.

### Build Status: ✅ SUCCESS

- Build completed successfully with Next.js 14.1.0
- All 12 pages generated successfully
- Development server starts correctly on http://localhost:3000
- Total bundle size: ~83kB shared + individual page sizes

### Testing Results

- ✅ TypeScript compilation: PASSED (no errors)
- ✅ Build process: PASSED (all pages generated)
- ✅ Development server: PASSED (starts successfully)
- ⚠️ ESLint: 10 warnings (no errors)

### Known Issues (Pre-Upgrade)

- ESLint warnings about @typescript-eslint/no-explicit-any in icon components (10 warnings)
- TypeScript version 5.3.3 not officially supported by @typescript-eslint (warning only)
- Next.js plugin not detected in ESLint configuration
- 7 npm audit vulnerabilities (1 low, 3 moderate, 2 high, 1 critical)

### Pages Inventory

- / (homepage)
- /attributions
- /project (project listing)
- /project/batch-calendar-events
- /project/forma
- /project/hong-fa-granite
- /project/ibm
- /project/reminders
- /project/toronto-water-monitor
- /uses
- 404 page
