# Engineering Manifesto: Capability Over Dependency

## Our premise
People and organisations should gain capability from technology, not become unnecessarily dependent on the systems that claim to help them.

Founders, practitioners and teams repeatedly encounter the same architectural decisions, delivery failures, security mistakes and operational constraints. Much of this knowledge already exists in standards, public handbooks, research, incident reports, case studies and open-source projects. Our responsibility is to find it, evaluate it, preserve its provenance and make it useful.

## Commitments

1. **Capability over dependency.** Help people understand, operate, adapt and replace the tools they use. Do not create avoidable dependence.
2. **Evidence over assertion.** Show the basis for recommendations. Label assumptions, uncertainty and gaps.
3. **Portability over lock-in.** Favour exportable data, open interfaces, documented schemas, replaceable infrastructure and reversible decisions.
4. **Human judgement over blind automation.** AI can propose, explain, test and review. People remain accountable for requirements, acceptance, risk and release.
5. **Explainability over mystification.** Document decisions, dependencies, data flows, failure modes and recovery procedures.
6. **Accessibility as capability.** Inclusive design is part of quality, not a cosmetic final pass.
7. **Resilience over assumed availability.** Consider degraded operation, export, recovery, support routes and switching costs.
8. **Learning over blame.** Investigate contributing conditions and improve the system without hiding uncomfortable evidence.

## In practice
- Use small, reviewable changes and clear acceptance criteria.
- Record consequential decisions and alternatives.
- Test critical behaviour and recovery paths.
- Keep secrets out of source control and minimise privileges.
- Document deployment, operations, restoration and retirement.
- Make AI contributions visible and verify generated work.
- Prefer interoperable formats and preserve provenance.
- Revisit decisions when evidence or constraints change.

## What we reject
Unsupported claims of security or compliance; automation without accountability; lock-in disguised as convenience; copying code or process without understanding context and licence; and treating a green badge as proof of fitness.

## Our measure of success
A successful product leaves its users more capable: better informed, more independent, more effective and able to make decisions about their own systems and data.

> **Don't start from scratch. Start from what humanity has already learned, and build what comes next.**

This manifesto is intent, not proof of implementation. Projects translate it into requirements, architecture decisions, tests and operational evidence.
