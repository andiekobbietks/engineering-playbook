# CI/CD and Quality Gates

Automate repeatable checks and make evidence visible before merge.

| Gate | Minimum expectation |
|---|---|
| Formatting/lint | Consistent style and no known lint errors |
| Tests | Relevant unit, integration and regression tests pass |
| Build | Reproducible build |
| Dependencies | Review vulnerable, unmaintained or unexpected dependencies |
| Security | Static analysis and secret scanning proportionate to risk |
| Documentation | Behaviour and operational instructions remain accurate |
| Review | Human review of material risk; automation supplements it |

Choose tools based on language, architecture, exposure and impact. Record exclusions and reasons.

## This repository
The included workflow runs Markdown linting on PRs and pushes to `main`. This is a documentation baseline, not a security certification or comprehensive software CI pipeline.

## Required status checks
After the first workflow run, inspect the exact check name GitHub reports and select that check in branch protection. Do not guess the status context or make a nonexistent check mandatory.

## Failure handling
Fix failures before merge. Do not hide or skip a failure to obtain green status. Track flaky checks with an owner and rationale. Emergency bypasses require follow-up review.

## Supply chain
For high-assurance environments, pin third-party Actions to reviewed immutable commit SHAs. Review permissions, use least privilege, enable dependency alerts and avoid giving untrusted PR code write-capable secrets.
