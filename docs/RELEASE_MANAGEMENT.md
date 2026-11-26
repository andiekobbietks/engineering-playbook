# Release Management

Releases should be deliberate, traceable, testable and reversible where possible.

## Versioning
Use [Semantic Versioning](https://semver.org/) where compatibility assumptions apply: MAJOR for incompatible API changes, MINOR for backward-compatible functionality, PATCH for backward-compatible fixes. Pre-1.0 projects should document their compatibility expectations.

## Release checklist
- [ ] Scope and user-visible changes documented.
- [ ] Required tests and security checks pass.
- [ ] Dependencies and migrations reviewed.
- [ ] Configuration and secrets kept outside source control.
- [ ] Release notes include known issues and upgrade actions.
- [ ] Backup and rollback/recovery approach understood.
- [ ] Monitoring and support ownership clear.
- [ ] Deployed version maps to a source commit.

## Recovery
Rollback is not always safe for database changes. Prefer forward fixes for irreversible transformations and design migrations with compatibility windows. Test restoration rather than assuming backups work.

## After release
Observe errors, latency, availability and user impact. Record incidents and learning. Close the release only when stable or remaining risk is explicitly accepted.
