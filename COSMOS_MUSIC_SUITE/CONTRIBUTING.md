# Contributing

Technical feedback, bug reports, test results, compatibility reports, and reproducible research observations are welcome.

Run the validation commands before reporting functional changes:

```bash
python -m compileall python/src
PYTHONPATH=python/src python -m pytest python/tests
node scripts/check-html.mjs
```

Do not submit secrets, copyrighted samples without redistribution rights, private sensor recordings, medical claims, proprietary datasets, or other material you do not have the right to provide.

## Rights boundary for new contributions

The published **COSMOS Music v1.1.0** generation and pre-boundary repository copies were distributed under GPL-3.0-only. Those historical rights remain intact.

Beginning 2026-08-16, the current protected generation is not accepting outside copyrightable code, documentation, audio assets, designs, mappings, or other substantive authorship for incorporation unless Cory Shane Davis and the contributor first execute a written contribution, assignment, or licensing agreement sufficient to establish the rights required for incorporation and future licensing.

Opening a pull request does not transfer copyright ownership and does not grant the project additional rights beyond those independently provided by law or a separate written agreement.

The prior GPL participation policy is preserved in `OPEN_SOURCE_AGREEMENT.md` as a historical record. Current contributions are governed by this file, `LICENSE`, and `LICENSE_HISTORY.md`.
