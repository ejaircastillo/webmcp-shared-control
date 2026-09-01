# WebMCP Shared Control

Shared human-agent workspaces for the WebMCP Challenge 2026.

The product thesis is simple: the page provides authoritative capabilities, ChatGPT provides the intelligence, and the person can take over the live page at any moment. When the person changes a cart or draft order directly, the agent must read the current application state again before continuing.

## Demo routes

- `/retail` — workspace ecommerce: search, product details, cart handoff, fulfillment, human confirmation and final order.
- `/retail/admin` — persisted retail orders and stock deltas.
- `/wholesale` — local wholesale procurement: discovery, authoritative quotes, MOQ/case-pack validation, draft handoff, human confirmation and purchase order.
- `/wholesale/supplier` — persisted wholesale orders and inventory reservations.

## Run locally

Requires Node.js 18+.

```bash
npm start
```

Open `http://127.0.0.1:4173/retail` or `http://127.0.0.1:4173/wholesale` as a top-level page. The app intentionally has no iframe and no custom LLM runtime. Demo state is persisted in this browser's local storage; use **Reset demo** to restore seeded stock, carts, drafts and orders.

## WebMCP contract

Each demo route registers its own page-scoped tools with `document.modelContext.registerTool` when the runtime is available. Tools are deliberately small and return structured facts or the resulting authoritative state. Final order tools require an explicit human confirmation recorded by the visible page and accept an idempotency key.

The current ChatGPT built-in browser supports the imperative top-level registration path. Declarative and iframe-only registration are not used in this competition path. See [`docs/webmcp-current-state.md`](docs/webmcp-current-state.md) for the verified runtime notes and the pending browser-environment verification record.

## Status

The native Site-tools verification record is intentionally marked blocked while the local browser-control runtime is unavailable. The app can be exercised through its normal UI and its registered WebMCP path can be verified in ChatGPT Desktop when that runtime is restored.

## License

MIT. See [`LICENSE`](LICENSE).
