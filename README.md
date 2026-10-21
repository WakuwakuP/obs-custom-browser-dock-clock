# OBS custom browser dock clock

## Development

Use Node.js 24.22.0 LTS (also pinned in `.nvmrc` and used by CI) and Yarn Classic 1.22.22.

```sh
nvm install
nvm use
yarn install --frozen-lockfile
yarn start
```

## Verification

```sh
CI=true yarn test --watchAll=false --runInBand
CI=true yarn build
```

The production build is written to `build/` with the existing `/obs-custom-browser-dock-clock/` base path. GitHub Actions builds and tests pull requests, and publishes only pushes to `master` through the existing GitHub Pages environment.

Webpack 4.47 and Babel loader 8.2.5 keep the existing build configuration compatible with Node.js 24 / OpenSSL 3 without `--openssl-legacy-provider`. The PostCSS dependency used by the safe parser is pinned to 8.5.15 for modern Node package exports compatibility; other PostCSS 7 consumers are unchanged. This is a runtime compatibility update, not a general dependency or framework modernization.
