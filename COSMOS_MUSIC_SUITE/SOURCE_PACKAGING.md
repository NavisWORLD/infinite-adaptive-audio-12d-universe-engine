# Source packaging and integrity

The three standalone instruments are normal HTML source files in the downloadable source archive. In GitHub, their deterministic gzip payloads are represented as **base64 text parts** under `app/source-parts/` because large binary transfers through the publication connector proved unreliable.

`npm run build` performs a strict reconstruction:

1. sort and concatenate each instrument's `.b64part` text files;
2. base64-decode the deterministic gzip payload;
3. gunzip the original HTML;
4. verify the restored HTML against its pinned SHA-256;
5. write the readable `.html` file into `app/`;
6. copy only the runnable application into `dist/` for PWA/native packaging.

Pinned hashes:

- `COSMOS_PLAY_ALONG.html` — `a2b28679f8b9c886fad845655250afdfedc4a2e7dd07e04afe7992be22fe1f76`
- `COSMOS_MUSIC_CONDUCTOR.html` — `18d3a7a7677f6fb6a6199b031aaf106d6b6f511871b6dca5c5737507cd84484a`
- `COSMOS_QUANTUM_BIO_INSTRUMENT.html` — `8c1de1bf3e0f8fd2de55a74c65745ba2fb66e4b585702fcaa7f1d2c7c71083f7`

The build refuses to continue if any part is missing or any restored hash differs. No minification or semantic code generation is applied to instrument source.
