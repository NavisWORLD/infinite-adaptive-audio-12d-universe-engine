# Contributing

Fork the repository, make a focused branch, run the validation commands, and submit a pull request describing what changed and how it was tested.

```bash
python -m compileall python/src
PYTHONPATH=python/src python -m pytest python/tests
node scripts/check-html.mjs
```

Do not submit secrets, copyrighted samples without redistribution rights, private sensor recordings, or medical claims. See `OPEN_SOURCE_AGREEMENT.md`, `PRIVACY.md`, and `SECURITY.md`.
