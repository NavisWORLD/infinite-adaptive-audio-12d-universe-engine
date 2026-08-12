# Source packaging note

The three large standalone instrument pages are committed as deterministic gzip source files under `app/*.html.gz` on this integration branch. This avoids transport limits while preserving the exact HTML source.

`npm run build` restores each `.html.gz` to its `.html` file before copying the application to `dist/`. Native mobile builds and GitHub Pages deployment run that build step automatically. The downloadable source archive supplied with the release also contains the directly readable `.html` files.

To restore them manually:

```bash
npm run build
```

No minification, code generation, or semantic transformation is applied to the instrument HTML during restoration; it is ordinary gzip decompression.
