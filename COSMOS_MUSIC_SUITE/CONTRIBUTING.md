# Contributing

Technical feedback, bug reports, test results, compatibility reports, and reproducible research observations are welcome.

Run the validation commands before reporting functional changes:

```bash
python -m compileall python/src
PYTHONPATH=python/src python -m pytest python/tests
node scripts/check-html.mjs
```

Do not submit secrets, copyrighted samples without redistribution rights, private sensor recordings, medical claims, proprietary datasets, or other material you do not have the right to provide.

## Rights and requirements for new open-source contributions

The published v1.1.0 release and historical repository copies remain under their original GPLv3 grants; the intervening source-available period remains documented in LICENSE_HISTORY.md.

For new changes to the restored GPL-3.0-only suite, submit only code or documentation that you own or are authorized to submit under GPL-3.0-only. By submitting material for acceptance under this contribution policy, identify the license/provenance of every third-party portion; contributors retain their copyright. The project may separately request a contributor agreement if additional rights are needed for later independently licensed versions, but such an agreement is not implied merely by submitting a PR. Opening a PR by itself does not assign copyright.

Do not submit secret credentials, copyrighted samples without authorization, sensitive sensor recordings or external datasets without documented rights. Preserve all original third-party notices.
