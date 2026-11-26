# Engineering Playbook

**AI-augmented engineering. Evidence-led decisions. Capability over dependency.**

This repository documents how **Andrea Kwabena Technologies** (public-facing identity: **AndieKobbieTech™**) designs, builds, reviews, secures and maintains software.

It is a living operating playbook, not a claim that every control is already implemented in every project. Practices are labelled as implemented, adopted, recommended or proposed. Evidence and maturity must be reported honestly.

## Why this exists

Founders and engineering teams should not have to rediscover every useful engineering lesson through avoidable failure. We can learn from public engineering handbooks, standards, case studies, incident reports and open-source implementations, then adapt those lessons to our own context.

The aim is not to copy another organisation's engineering culture. It is to make good engineering knowledge discoverable, explainable, reusable and testable.

## The engineering manifesto

### Capability over dependency
Technology should increase people's ability to understand, decide, operate and improve. Avoid unnecessary dependence on a tool or provider.

### Evidence over assertion
Trace decisions to requirements, tests, measurements, user evidence or clearly stated assumptions. Distinguish verified facts from hypotheses.

### Portability over lock-in
Prefer documented interfaces, exportable data, replaceable components and interoperable formats. Portability must be tested, not merely claimed.

### Human judgement over blind automation
AI and automation can accelerate analysis and implementation. Humans remain accountable for scope, review, risk acceptance, security and release.

### Explainability over mystification
The people responsible for a system should be able to explain what it does, why choices were made, how changes were tested and how to recover.

### Learning over blame
Treat incidents, defects and failed experiments as inputs to improve the system. Record impact, contributing conditions, remediation and follow-up actions.

> **Don't start from scratch. Start from what humanity has already learned, and build what comes next.**

## Operating model

1. **Understand** the problem, constraints, acceptance criteria and risks.
2. **Research** applicable standards, prior art, case studies and existing solutions.
3. **Decide** and record consequential choices in an Architecture Decision Record (ADR).
4. **Plan** a small, reviewable change with explicit completion criteria.
5. **Implement** on a short-lived branch with focused commits.
6. **Validate** with relevant tests, security checks and manual review.
7. **Review** the diff, evidence, dependencies, accessibility and operational impact.
8. **Release** through a controlled, reversible process.
9. **Observe** behaviour and feed learning back into the backlog.

`Problem → Evidence → Decision → Plan → Change → Review → Verify → Release → Operate → Learn`

A change is not complete merely because code has been generated or a pull request has merged.

## Core principles

| Principle | Expected practice |
|---|---|
| Small changes | Keep pull requests focused and understandable |
| Traceability | Link changes to issues, requirements or decisions |
| Reviewability | Explain intent, risk, tests and operational effects |
| Automation | Automate repeatable checks; retain human accountability |
| Security | Apply least privilege, secret hygiene and dependency review |
| Accessibility | Treat inclusive use as a quality attribute |
| Resilience | Design for failure, recovery and provider disruption |
| Maintainability | Prefer clarity, documented interfaces and tested behaviour |
| Continuous learning | Use incidents, metrics and retrospectives to improve |

## Pull-request delivery

The default workflow is GitHub Flow: keep `main` releasable, create short-lived branches, open a PR with context and acceptance criteria, run checks, review the complete diff, resolve material feedback, merge and verify the resulting default-branch state.

AI review tools (including CodeRabbit where configured) are additional reviewers, not substitutes for tests, maintainers or domain expertise. A pending, skipped or successful bot status must be reported accurately.

## Case studies and external precedents

These are research starting points, not endorsements or claims of affiliation.

| Organisation / source | Useful lesson | How we adapt it |
|---|---|---|
| [Monzo Engineering](https://monzo.com/blog/) | Service ownership, operational learning and engineering transparency | Keep changes reviewable; make ownership and operational consequences explicit |
| [GOV.UK / GDS](https://github.com/alphagov) | Public digital-service delivery, open development and standards | Document decisions, accessibility and service expectations |
| [Defra Digital](https://github.com/DEFRA) | Government delivery across a broad service portfolio | Reuse public patterns only after documenting context |
| [Zalando Engineering](https://engineering.zalando.com/) | Engineering principles and platform thinking | Prefer consistent interfaces, automation and clear service boundaries |
| [Spotify Engineering](https://engineering.atspotify.com/) | Team autonomy and platform enablement | Give teams ownership while sharing reusable standards |
| [GitLab Handbook](https://handbook.gitlab.com/handbook/engineering/) | Publicly documented engineering workflows | Maintain this playbook as living documentation |
| [Google SRE](https://sre.google/sre-book/table-of-contents/) | Reliability, service objectives and incident response | Scale operational controls to service criticality |
| [OWASP](https://owasp.org/) | Practical application-security knowledge | Integrate security into delivery, not just final review |

Every full case study must cite primary sources, record dates, distinguish fact from interpretation, capture failures and trade-offs, and check reuse licences. See [Case Studies](docs/CASE_STUDIES.md).

## Relationship to our projects

- **AgentSON** explores portable, auditable and interoperable records for AI-agent execution.
- **AKCloud** explores provider-aware, portable and independently operable service delivery.
- **Andrea Kwabena Technologies** is the parent business identity; **AndieKobbieTech™** is the established public-facing shorthand.

Individual projects retain their own architecture, threat models, licences, roadmaps and release policies.

## Repository map

- [Manifesto](docs/MANIFESTO.md)
- [Branching strategy](docs/BRANCHING_STRATEGY.md)
- [Code review](docs/CODE_REVIEW.md)
- [AI-assisted development](docs/AI_ASSISTED_DEVELOPMENT.md)
- [CI/CD and quality gates](docs/CI_CD_AND_QUALITY_GATES.md)
- [Release management](docs/RELEASE_MANAGEMENT.md)
- [Security and governance](docs/SECURITY_AND_GOVERNANCE.md)
- [Architecture Decision Records](docs/ARCHITECTURE_DECISIONS.md)
- [Case studies](docs/CASE_STUDIES.md)
- [References](docs/REFERENCES.md)

## Maturity and honest reporting

- **Implemented:** verifiably configured and in use in a named repository.
- **Adopted:** agreed as operating practice, with evidence of use.
- **Recommended:** documented target practice not yet consistently implemented.
- **Proposed:** under consideration and not yet approved.

A merged PR alone does not prove all checks passed or independent review occurred.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Propose improvements through issues and pull requests. Keep guidance actionable, source claims and explain trade-offs.

## Licence

Unless stated otherwise, original documentation is offered under the MIT License. External material remains subject to its original licence and attribution requirements. See [LICENSE](LICENSE).
