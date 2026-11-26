# Code Review Standard

Review improves correctness, security, maintainability and shared understanding. It is not a rubber stamp.

## Review dimensions
1. Intent: does the change solve the stated problem?
2. Correctness: are edge cases and failure paths addressed?
3. Security/privacy: are inputs, permissions, secrets and dependencies safe?
4. Architecture: are boundaries and decisions respected?
5. Quality: is the change understandable, testable and maintainable?
6. Operations: can it be deployed, monitored, supported and rolled back?
7. Accessibility: is inclusive use preserved where relevant?
8. Evidence: are tests proportionate to risk?

## Severity
- **Blocker:** likely data loss, compromise, severe outage or fundamental incorrectness.
- **High:** significant defect/risk to fix before merge.
- **Medium:** material maintainability, reliability or usability concern.
- **Low:** minor improvement.
- **Question:** request for explanation, not necessarily a defect.

Explain impact and, where possible, propose a resolution.

## AI-assisted review
AI tools can identify candidate defects and tests. Verify every finding against code, requirements and runtime behaviour. An AI approval is not independent human approval.

## Author checklist
- [ ] I understand the complete diff.
- [ ] Relevant tests and checks have run.
- [ ] Failure and security cases were considered.
- [ ] Documentation and ADRs are current.
- [ ] No secrets or sensitive data were committed.
- [ ] Known limitations and accepted risks are stated.
