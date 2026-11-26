# Branching and Pull-Request Strategy

## Default: GitHub Flow
Keep `main` releasable. Use short-lived branches for coherent changes.

### Branch names
- `feat/<description>` feature
- `fix/<description>` defect
- `docs/<description>` documentation
- `refactor/<description>` internal restructuring
- `test/<description>` test-only change
- `chore/<description>` maintenance
- `security/<description>` security remediation

### Lifecycle
1. Start from an up-to-date `main`.
2. Keep scope small and commits logical.
3. Link an issue or state why none is needed.
4. Explain behaviour, risks, tests and rollout effects in the PR.
5. Run checks and review the full diff.
6. Resolve material feedback and update the branch.
7. Merge using the chosen strategy.
8. Verify the merged commit and close the loop.

## Merge strategy
Prefer squash merging for focused changes where it keeps history clear. Use merge commits when preserving meaningful multi-commit history matters. Avoid force-pushing shared branches.

## Main-branch protection baseline
- Require pull requests before merging.
- Require configured status checks to pass.
- Require conversation resolution.
- Block force pushes and branch deletion.
- Require linear history if squash/rebase is the team norm.
- Permit administrator bypass only for documented emergency recovery.
- For a single-maintainer repository, set required approvals to **zero** until an independent reviewer is available. A maintainer cannot meaningfully approve their own PR.
- For a team, require at least one approval from someone other than the author; dismiss stale approvals after new commits and use CODEOWNERS for sensitive paths.

## Solo-maintainer integrity
PRs still provide a diff, discussion, automated evidence and an auditable decision point. They are not independent peer review. Never describe a self-authored/self-merged PR as independently approved.

## Emergency changes
Record why a bypass was needed, the risk accepted, checks omitted and follow-up review. Restore normal protection immediately.

## References
- [Protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
