# Contributing

Technical feedback, bug reports, test results, compatibility reports, and reproducible research observations are welcome.

Run the validation commands before reporting functional changes:

```bash
python -m compileall python/src
PYTHONPATH=python/src python -m pytest python/tests
node scripts/check-html.mjs
```

Do not submit secrets, copyrighted samples without redistribution rights, private sensor recordings, medical claims, proprietary datasets, or other material you do not have the right to provide.

## Open-source contributions

Original code in this generation is licensed GPL-3.0-only. Submit only code, documentation, and assets you have the right to license for inclusion in this GPLv3 project. By submitting a contribution for inclusion, you agree that the contribution can be distributed under the project's GPLv3 license (unless specifically marked with another compatible approved license). Contributors retain copyright in their original contributions; pull requests do not transfer ownership or grant unlimited relicensing rights to anyone. Third-party recordings, media, model weights, privacy-sensitive or non-redistributable content must not be submitted.

Historical v1.1.0 GPL and intervening source-available boundaries are preserved in LICENSE_HISTORY.md. The earlier special contribution terms in OPEN_SOURCE_AGREEMENT.md are an historical record, not current contribution requirements.
