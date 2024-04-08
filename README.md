# Nuxt Mailpit

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Integrate the [Mailpit][mailpit-href] web UI effortlessly in the [Nuxt][nuxt-href] devtools.

<!-- - [✨ Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-mailpit?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- 🧙 **Devtools integration**: Access the Mailpit web UI directly from Nuxt devtools.

## Quick Setup

1. Add `nuxt-mailpit` dependency to your project

```bash
npx nuxi@latest module add mailpit
```

2. Add `nuxt-mailpit` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-mailpit'
  ]
})
```

3. Ensure you have Mailpit installed and running.

That's it! You can now use Mailpit in your Nuxt app ✨

## Module options

```ts
export default defineNuxtConfig({
  modules: ["nuxt-mailpit"],
  mailpit: {
    // Enable or disable the Mailpit web UI in devtools
    devtools: true,
    // The URL of the Mailpit web UI
    webUiUrl: "http://localhost:8025",
  }
})
```

## Contributing

Suggestions for new features, bug reports and pull requests are welcome!

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
pnpm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-mailpit/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-mailpit

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-mailpit.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-mailpit

[license-src]: https://img.shields.io/npm/l/nuxt-mailpit.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-mailpit

[mailpit-href]: https://mailpit.axllent.org/
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
