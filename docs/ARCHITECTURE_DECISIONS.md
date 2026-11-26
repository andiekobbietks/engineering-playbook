# Architecture Decision Records

ADRs capture a consequential decision, context, alternatives, trade-offs and consequences. They preserve reasoning, not merely the final answer.

## Lifecycle
- **Proposed:** under discussion.
- **Accepted:** chosen for implementation.
- **Superseded:** replaced by a later decision.
- **Deprecated:** no longer recommended or in use.

Do not silently rewrite historical decisions. Add a new ADR that supersedes the old one.

## Template
Create `docs/adr/NNNN-short-title.md`:

```markdown
# ADR NNNN: Short decision title
- Status: Proposed
- Date: YYYY-MM-DD
- Decision owners:
- Related issue/PR:

## Context
What problem, constraints and forces require a decision?

## Decision drivers
Security, cost, portability, performance, operability, accessibility?

## Options considered
1. Option A: benefits, drawbacks and evidence.
2. Option B: benefits, drawbacks and evidence.
3. Do nothing: consequences.

## Decision
What are we choosing and why?

## Consequences
What becomes easier or harder? What risks remain?

## Validation
How will we test whether this works?

## Review trigger
What evidence would cause us to revisit it?

## References
Primary sources, dates and licences.
```

Distinguish measured outcomes from estimates and assumptions. Record environment, date and method for measurements.
