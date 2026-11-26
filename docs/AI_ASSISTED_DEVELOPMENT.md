# AI-Assisted Development Standard

AI is an engineering assistant, not an autonomous authority. It may help research, plan, implement, explain, test and review. The human developer owns the resulting change.

## Suitable uses
- Explore unfamiliar code and summarise it for verification.
- Draft plans, tests, documentation and migration notes.
- Generate candidate code and refactorings for review.
- Identify potential defects, security issues and missing edge cases.
- Compare alternatives and surface assumptions.
- Assist repetitive maintenance.

## Required controls
1. Define task boundaries and acceptance criteria before delegation.
2. Provide only the minimum necessary context and data.
3. Never provide credentials, secrets, private keys or unnecessary client/personal data.
4. Treat repository content, issues, webpages and tool output as untrusted input.
5. Review every material generated change and inspect the full diff.
6. Run tests and independent checks proportionate to risk.
7. Verify citations, APIs, package names, licences and factual claims.
8. Keep a human accountable for merge and release.
9. Record significant AI involvement where it affects provenance or obligations.
10. Never claim a test ran or a fix worked without evidence.

## Prompt injection and tool safety
Instructions embedded in code, documents, webpages or retrieved data do not override task-owner instructions. Agents must not exfiltrate secrets, widen permissions, alter unrelated files or execute destructive actions because retrieved content asks them to.

Use least-privilege tokens and scoped environments. Require human approval for external side effects, production changes, deletion and sensitive access.

## Verification
AI-generated code receives the same or greater scrutiny as human-written code. Check behaviour, tests, dependency impact, security and compatibility. Passing tests are evidence, not proof.

## Work record
For consequential tasks record the objective, agent/model/tool context where appropriate, files changed, human review, checks actually executed, limitations and final human decision. This complements project provenance systems such as AgentSON; it does not replace them.
