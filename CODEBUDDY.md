# CODEBUDDY.md

This file provides guidance to CodeBuddy Code when working with code in this repository.

## Project Overview

AIPortal is an enterprise-level AI application showcase platform built with Vue 3 and TypeScript. It's a Single Page Application (SPA) that displays AI applications across various industry scenarios (government, travel, office, marketing, automotive, retail, etc.). The application uses static mock data embedded in the views and does not currently integrate with a backend.

## Technology Stack

- **Framework:** Vue 3.5.22 with Composition API (`<script setup>`)
- **Language:** TypeScript 5.9.0
- **Build Tool:** Vite 7.1.7
- **State Management:** Pinia 3.0.3
- **Routing:** Vue Router 4.5.1
- **Linting:** ESLint 9.33.0 with Vue and TypeScript configs
- **Type Checking:** vue-tsc 3.1.0

## Node.js Requirements

```json
"engines": {
  "node": "^20.19.0 || >=22.12.0"
}
```

## Common Commands

### Development

```bash
npm install              # Install dependencies
npm run dev             # Start development server (typically http://localhost:5173)
npm run lint            # Lint code with auto-fix
npm run type-check      # Run TypeScript type checking
```

### Build

```bash
npm run build           # Type-check and build for production
npm run build-only      # Build without type-check
npm run preview         # Preview production build locally
```

### Testing

Currently, there is no testing framework set up in the project. The `tsconfig.app.json` excludes test files with `"exclude": ["src/**/__tests__/*"]`, suggesting tests may be added in the future.

## Architecture

### Application Entry Point Flow

```
index.html → src/main.ts → App.vue → Router → Views
```

1. **index.html** - HTML entry with `#app` mount point
2. **src/main.ts** - Creates Vue app, registers Pinia and Router, mounts to #app
3. **src/App.vue** - Root component with global header, footer, and navigation
4. **src/router/index.ts** - Route definitions with lazy loading
5. **Views** - Page components that render based on current route

### Directory Structure

```
src/
├── assets/              # Global styles and images
│   ├── base.css        # Design system with CSS custom properties
│   └── main.css        # Application-wide styles
├── components/          # Reusable Vue components
│   └── icons/          # SVG icon components
├── router/              # Vue Router configuration
│   └── index.ts        # Route definitions
├── stores/              # Pinia state management
│   └── counter.ts      # Counter store (example code)
├── views/               # Page components
│   ├── HomeView.vue        # Landing page
│   ├── AIToolsView.vue     # AI tools catalog with filtering
│   └── AppDetailView.vue   # Individual app details
├── App.vue             # Root component
└── main.ts             # Application entry point
```

### Routing Structure

The router uses web history mode and defines 3 main routes:

- `/` → HomeView (landing page with hero banner and featured apps)
- `/ai-tools` → AIToolsView (app catalog with sidebar search and category filtering)
- `/ai-tools/:id` → AppDetailView (detailed app information with demo interface)

Non-home routes are lazy-loaded for better performance.

### State Management

Pinia is registered in main.ts but currently minimal state is used:
- `stores/counter.ts` - Example counter store (likely template code)
- Most data is stored as component refs in views

### Data Structure

AI application data is currently embedded in views as static arrays:

```typescript
{
  id: number | string
  name: string
  description: string
  category: string    // One of the 13 predefined categories
  icon: string        // Emoji representing the app
  tags: string[]     // List of feature tags
  features?: string[] // Additional features (in AppDetailView)
}
```

Categories: government, travel, office, marketing, automotive, retail, service, analytics, legal, procurement, operations, platform

## Design System

### CSS Custom Properties

The design system uses CSS variables defined in `src/assets/base.css`:

**Colors:**
- Primary: `--color-primary: #1890ff`
- Text: `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- Background: `--color-bg-base`, `--color-bg-layout`
- Status: `--color-success`, `--color-warning`, `--color-error`

**Spacing:**
- `--spacing-xs: 4px`
- `--spacing-sm: 8px`
- `--spacing-md: 16px`
- `--spacing-lg: 24px`
- `--spacing-xl: 32px`

**Animation:**
- `--animation-duration-slow: 0.3s`
- `--animation-duration-base: 0.2s`
- `--animation-duration-fast: 0.1s`

### Styling Approach

- Scoped CSS in Vue components
- Utility classes in base.css (`.container`, `.flex`, `.text-center`, etc.)
- Responsive design with mobile-first approach
- CSS custom properties for theming

## Path Aliases

The project uses path aliases configured in both `vite.config.ts` and `tsconfig.app.json`:

```typescript
'@' → './src'
```

Use this alias for imports: `import Component from '@/components/Component.vue'`

## Configuration Files

- **vite.config.ts** - Vite build configuration with Vue plugin and path aliases
- **tsconfig.json** - Root TypeScript config with project references
- **tsconfig.app.json** - Application TypeScript config with path aliases
- **tsconfig.node.json** - Build tools TypeScript config
- **eslint.config.ts** - ESLint flat config with Vue and TypeScript support

## Key Components

### App.vue (Root Component)

Provides the global layout:
- Fixed header with logo, navigation, and login button
- Responsive mobile menu toggle
- RouterView for page content
- Footer with company information and links

### AIToolsView.vue

Main catalog page featuring:
- Sidebar with 13 category filters
- Search functionality (case-insensitive)
- App grid with cards showing icon, name, description, and tags
- Computed properties for filtering apps by category and search query

### AppDetailView.vue

Individual app details page featuring:
- Detailed app information display
- Features list with numbered items
- Tags display
- Simulated chat/demo interface with loading states
- Back navigation and not-found handling

### HomeView.vue

Landing page featuring:
- Hero banner with gradient background
- Product features showcase (6 features)
- Featured apps grid (6 apps)
- Call-to-action buttons
- Responsive design

## Development Practices

### Vue Patterns

- Use Composition API with `<script setup lang="ts">`
- Use `ref()` and `computed()` for reactive state
- Use `useRouter()` and `useRoute()` from vue-router for navigation
- Use scoped CSS for component isolation

### TypeScript Usage

- Strict typing in components
- Interface definitions for data structures
- Route parameter type casting (e.g., `Number(route.params.id)`)
- Type checking required before build

### Code Quality

- ESLint runs on all TypeScript and Vue files
- Auto-fix enabled via `.vscode/settings.json`
- Type checking before production build
- VSCode settings include auto-fix on save

## External Integration

- **百炼平台 (Bailian):** https://bailian.aliyun.com/ - External AI platform by Alibaba (linked in header navigation)
- Currently no backend integration (all data is static/mock)
- No authentication implemented (login button is UI only)

## Build Output

- Production builds are output to `dist/` directory
- Static site generation (no SSR)
- Can be deployed to any static hosting service
- Preview locally with `npm run preview`

## Current Limitations

- All AI application data is embedded in views (not externalized)
- No actual AI functionality (showcase only)
- No API calls or database connections
- Minimal state management usage
- No authentication or user management
- No testing framework configured

## Recommended IDE Setup

- **Editor:** VS Code
- **Extensions:**
  - Vue.volar (Vue language support) - Required for `.vue` file TypeScript support
  - dbaeumer.vscode-eslint (ESLint)
  - EditorConfig.EditorConfig

## Browser DevTools

Recommended for development:
- Vue.js devtools extension (Chrome: https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd, Firefox: https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- Enable Custom Object Formatter in browser DevTools for better Vue inspection

## Important Notes

- The project uses strict TypeScript mode but has `.hintrc` to turn off strict TypeScript hints in Web Hint
- VSCode file nesting is enabled to group related config files
- ESLint ignores: `**/dist/**`, `**/dist-ssr/**`, `**/coverage/**`
- Node 20.19.0+ or 22.12.0+ is required
