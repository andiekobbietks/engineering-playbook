# Security and Engineering Governance

## Baseline
- Apply least privilege to users, services, CI jobs and tokens.
- Keep credentials in a secret manager, never Git.
- Enable secret scanning and dependency alerts where available.
- Validate untrusted input and encode output appropriately.
- Use supported dependencies and review advisories.
- Protect production data and minimise retention.
- Separate development, test and production.
- Document incident escalation and recovery.

## Risk-based assurance
- **Low:** documentation, cosmetic changes or isolated low-impact maintenance.
- **Medium:** user-facing behaviour, integrations, data processing or dependency changes.
- **High:** authentication, payments, sensitive data, infrastructure, cryptography or production migrations.

Increase review depth, testing, approvals and rollout controls with risk. Classification supports judgement; it does not replace threat modelling.

## Governance evidence
For material systems maintain ownership/support model, data flows and trust boundaries, threat model, risk register, ADRs, dependency/licence inventory, test/release evidence, recovery procedures and known limitations.

## Privacy and AI
Do not send confidential, personal or special-category data to an AI service unless authorised, necessary and covered by appropriate privacy/security controls. Minimise and anonymise data where feasible.

## Compliance language
Do not claim compliance, certification or regulatory approval based only on this playbook. Map obligations to the actual system, organisation, jurisdiction and evidence; obtain qualified advice where needed.
