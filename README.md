# capture-sandbox

Demo site for the homelab capture loop (E33, josephcarey/homelab#49).

Captures classified as `code` domain become issues here. An agent works the
issue into a PR; merging to `main` autodeploys to the lab within a minute
(nginx on the capture VM + a git pull timer).

Keep changes tiny and visually verifiable.

## Lint

`bun install && bun run lint` runs ESLint over the inline script in `index.html`
(`eslint.config.mjs`). Forge runs the same check in a container after every change it makes
and feeds any new errors back to the model before opening a PR. The site itself has no build
step; `package.json` exists only for this.
