# Evidence and Knowledge Research Method

## Purpose

A useful engineering playbook should not be limited to instructions. It should help practitioners locate prior evidence, compare precedents and understand the conditions under which a practice works.

This method also provides a bridge to the wider Strategy-as-a-Service (STaaS) research direction: reusable, provenance-aware business and technology knowledge rather than another unsupported business-plan generator.

## Research principles

1. Start with a decision or question, not an indiscriminate data scrape.
2. Prefer primary sources and preserve exact source references.
3. Capture publication date, access date, author/organisation and jurisdiction.
4. Separate source facts, analyst interpretation, assumptions and recommendations.
5. Include failures, pivots, acquisitions, operating constraints and negative outcomes, not only success stories.
6. Record licensing, privacy, terms-of-use and redistribution constraints before storing or republishing material.
7. Deduplicate entities and events without discarding distinct source perspectives.
8. Track freshness and revisit time-sensitive records.
9. Preserve the original evidence and transformation history.
10. Make uncertainty visible; do not convert missing data into invented facts.

## Knowledge record fields

| Field | Description |
|---|---|
| record_id | Stable identifier |
| title / summary | Short human-readable description |
| source_url | Canonical source |
| source_type | Filing, report, research paper, company post, dataset, interview, etc. |
| publisher / author | Originating organisation or author |
| published_at / retrieved_at | Source publication and retrieval timestamps |
| geography | Jurisdiction or market |
| industry | Relevant sector |
| entity | Company, product, programme or organisation |
| event_type | Launch, funding, failure, pivot, acquisition, restructuring, incident, etc. |
| evidence_excerpt | Minimal excerpt or reference, subject to copyright and licence |
| interpretation | Analyst interpretation, kept separate from source facts |
| confidence | High / medium / low with rationale |
| licence / reuse_status | Licence, terms and permitted use |
| freshness_review | Next review date or staleness rule |
| provenance | Collection and transformation history |
| gaps | Missing evidence and unresolved questions |

## Structured, portable knowledge

The target is portable, timestamped, provenance-linked Markdown records with explicit metadata and validation. A local index can support full-text search (for example SQLite FTS5) and optional embeddings. Retrieval interfaces, including read-only MCP tools, should expose source references and never silently turn retrieval into authority.

An Open Knowledge Format/Framework (OKF) should be treated as a proposed structured interchange layer until its name, schema, licence, validation rules and versioning contract are formally settled. Do not claim interoperability before fixtures and conformance tests demonstrate it.

## Dataset register: business and technology intelligence

For each source or corpus, record:

- Dataset/source name and owner
- Geography and industry coverage
- Number of usable records and collection period
- Coverage of failures, pivots, financing, acquisitions and operations
- Access method and update frequency
- Licence, terms, privacy and redistribution constraints
- Quality controls, deduplication and known biases
- Provenance completeness and validation status
- Integration status with the knowledge format
- Gaps and next research action

## Validation gates

Before a corpus is described as usable:

- [ ] Source import is reproducible.
- [ ] Original content and metadata are preserved losslessly where permitted.
- [ ] Duplicate reconciliation is explainable and reversible.
- [ ] Provenance and timestamps survive export/import.
- [ ] Schema validation rejects malformed records.
- [ ] Search results retain citations to their source records.
- [ ] Access controls and licensing restrictions are enforced.
- [ ] Tests cover corrupted, incomplete and conflicting source records.

A target of 100–200 deeply researched cases is a research milestone, not an existing dataset or validated outcome. Expand only when depth, provenance and rights are maintained.
