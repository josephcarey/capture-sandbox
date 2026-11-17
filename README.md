# capture-sandbox

Demo site for the homelab capture loop (E33, josephcarey/homelab#49).

Captures classified as `code` domain become issues here. An agent works the
issue into a PR; merging to `main` autodeploys to the lab within a minute
(nginx on the capture VM + a git pull timer).

Keep changes tiny and visually verifiable.
