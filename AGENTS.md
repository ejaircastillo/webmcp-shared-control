# WebMCP Challenge 2026 — Codex Execution Contract

> **Status:** current source of truth for implementation.
> **Executor:** Codex only.
> **Priority:** maximize competition quality before the 2026-09-03 deadline. Productization is secondary.
> **Target repository:** `ejaircastillo/webmcp-shared-control`.
> **Project boundary:** standalone project. Not Aura, not Usina de Justicia, not IVUJUS.

## 0. Repository rule

This branch in `ejaircastillo/collaborative-repo-workflow` is only the planning/bootstrap staging area.

**Do not implement the challenge product in this repository.**

The implementation belongs in a standalone repository named:

```text
ejaircastillo/webmcp-shared-control
```

If the target repository does not exist, Codex should create it before implementation if its environment has authenticated GitHub repository-creation capability. If Codex cannot create repositories, stop and report that blocker; do not silently implement inside `collaborative-repo-workflow`.

When the standalone repository exists, copy this `AGENTS.md` to its root and copy `docs/webmcp-current-state.md` into its `docs/` directory. From that point, the standalone repository is the implementation source of truth.

---

## 1. Competition thesis

The project is **not**:

- another ecommerce assistant;
- another universal Page Agent;
- a chatbot wrapper around WebMCP;
- an approval workflow;
- a demo where the agent performs everything while the user watches.

The thesis is:

> **A shared interface for the agentic web: the page exposes authoritative capabilities, ChatGPT acts through them, the human can take over the live page at any moment, and ChatGPT can re-read the changed state through WebMCP and continue without breaking the flow.**

Supporting formulation:

> **The page provides the capabilities. The model provides the intelligence. The human stays in control.**

The differentiator is **bidirectional continuity of control**, not merely tool discovery or human approval.

Competitive centerpiece:

```text
CHATGPT ACTS
    ↓
HUMAN MANUALLY CHANGES THE LIVE PAGE
    ↓
CHATGPT RE-READS AUTHORITATIVE STATE THROUGH WEBMCP
    ↓
CHATGPT ADAPTS TO THE HUMAN'S CHANGE
    ↓
FLOW CONTINUES CORRECTLY
```

This must be visible in the final demo on two different sites.

---

## 2. Runtime architecture

### ChatGPT is the primary conversational agent

For the final competition demo use OpenAI Site tools/WebMCP through ChatGPT Desktop's built-in browser.

```text
CHATGPT DESKTOP
  ├─ conversation / reasoning / tool selection
  └─ built-in browser
       └─ TOP-LEVEL DEMO PAGE
            ├─ normal human UI
            ├─ WebMCP / Site tools
            ├─ shared mutable state
            └─ visual collaboration mode
```

Do **not** build:

- a second custom LLM to recreate ChatGPT inside the site;
- a custom universal agent shell as a prerequisite;
- an iframe-only WebMCP architecture;
- a scraping fallback presented as WebMCP.

### Top-level page requirement

Current Site tools behavior requires the active WebMCP application to be the current top-level page for the competition path.

Required routes:

```text
/retail
/retail/admin
/wholesale
/wholesale/supplier
```

A home/launcher route is optional, but `/retail` and `/wholesale` themselves must expose the Site tools.

### Same-agent proof

The same ChatGPT conversation must be able to:

1. use `/retail`;
2. survive a human manual edit and re-read retail state;
3. navigate to `/wholesale` without starting a new agent/conversation;
4. discover a materially different WebMCP catalog;
5. survive a second human manual edit and re-read wholesale state.

No `RetailAgent`, `WholesaleAgent`, second system prompt, or site-specific LLM runtime.

---

## 3. UX direction

The website remains a normal usable product for humans. ChatGPT provides the conversation.

Do not duplicate a full chat transcript inside the page.

The page may enter a lightweight **collaboration mode** that emphasizes task-relevant state:

```text
collection
comparison
detail
choices
summary
form
confirmation
status
```

Use shadcn/ui and `shadcn-ui/chatbot-template` as interaction/design inspiration, especially for clean state transitions, questionnaires/choices, streaming-status patterns and human-in-the-loop controls.

Do not build arbitrary LLM-generated React/UI for the competition deadline. The site deterministically renders its own business state.

Useful visual cues may include:

- changed by you;
- updated by agent;
- current cart/draft summary;
- delivery choices;
- prepared form;
- agent-ready capability labels grounded in real registered tools.

No chain-of-thought or verbose tool logs in the primary UI.

---

## 4. Demo A — Retail workspace ecommerce

### Primary prompt

> “Me mudé hace poco. Trabajo ocho horas con la notebook, tengo poco espacio y quiero armar un lugar cómodo para trabajar sin gastar más de USD 800.”

### Required flow

1. ChatGPT discovers Site tools on `/retail`.
2. At most 1–2 useful clarifying questions if needed.
3. Search the real seeded catalog through WebMCP.
4. Read product details through WebMCP.
5. Add a small workspace combination to the real cart.
6. Page visibly reflects the cart change.
7. **Human manually replaces one item or changes a quantity using the normal UI.**
8. User says: “Seguimos desde acá.”
9. ChatGPT **must call `get_cart`**.
10. ChatGPT continues from the current cart rather than stale conversational memory.
11. Retrieve fulfillment options.
12. Prepare checkout/form.
13. Human explicitly confirms the sensitive/consequential action.
14. Persist the order exactly once.
15. `/retail/admin` shows the new order and a stock delta.

### Frozen retail WebMCP contract

#### `search_products` — read-only

Authoritative catalog search.

Suggested input:

```ts
{
  query: string;
  category?: string;
  maxPrice?: number;
  features?: string[];
  limit?: number;
}
```

Return compact structured product facts: ID, name, category, price/currency, thumbnail, availability/stock and highlights.

Do not put recommendation intelligence inside the tool.

#### `get_product_details` — read-only

Accept multiple product IDs and return normalized comparable facts such as dimensions, ergonomic features, compatibility, warranty, stock and price.

Do not create a separate `compare_products` tool. ChatGPT compares authoritative facts.

#### `get_cart` — read-only

Strategic centerpiece. Returns the current authoritative cart:

```ts
{
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
  }>;
  subtotal: number;
  currency: string;
}
```

After a human manual cart change, this read is mandatory before consequential continuation.

#### `set_cart_item` — mutating

Target-state semantics:

```ts
{
  productId: string;
  quantity: number;
  variantId?: string;
}
```

Rules:

- `quantity = 0` removes item;
- validate stock server-side;
- return resulting authoritative cart;
- visibly update UI;
- idempotent for same desired state;
- no blind retry after ambiguous mutation failure.

#### `get_fulfillment_options` — read-only

Return valid delivery/pickup choices for the current cart and destination.

#### checkout / final order

Prefer native Declarative WebMCP if stable in the actual final runtime.

If native declarative behavior is unstable, use a safe imperative **prepare** action that fills/prepares visible checkout state but still requires explicit human confirmation before final order creation.

Never hide the fallback as if it were declarative.

Final order mutation must:

- accept an idempotency key;
- create exactly one order;
- change/reserve stock transactionally where possible;
- return visible order ID;
- appear immediately in `/retail/admin`.

---

## 5. Demo B — Local wholesale procurement

Do not return to international commerce for this challenge. Customs, duties, Incoterms, external supplier research and trade regulation dilute WebMCP leverage.

### Primary prompt

> “Tengo una ferretería y unos USD 3.000 para incorporar mercadería nueva. Quiero algo equilibrado entre margen y rotación, pero no sé qué sumar.”

### Required flow

1. Navigate to `/wholesale` in the **same ChatGPT conversation**.
2. ChatGPT discovers a different Site-tools catalog.
3. Search the seeded wholesale catalog.
4. Request deterministic quotes with MOQ, case pack, price tiers and stock.
5. Build a real draft order.
6. **Human manually changes one quantity/item in the normal UI.**
7. User tells ChatGPT to continue.
8. ChatGPT **must call `get_draft_order`**.
9. Continue from the human-edited current state.
10. Retrieve delivery terms.
11. Prepare the purchase-order form.
12. Human explicitly confirms.
13. Persist wholesale order exactly once.
14. `/wholesale/supplier` shows the order and inventory reservation/delta.

### Frozen wholesale WebMCP contract

#### `discover_products` — read-only

Search real wholesale catalog using business context, objective and budget.

Suggested input:

```ts
{
  businessContext: string;
  objective: "rotation" | "margin" | "balanced";
  maxOrderValue: number;
  categoryExclusions?: string[];
  limit?: number;
}
```

Return real product/supplier facts such as product ID/name/category, supplier, wholesale base price, optional suggested retail price, MOQ, case pack, stock and currency.

Do not hide model reasoning inside `recommend_products`.

#### `get_wholesale_quote` — read-only

Server computes authoritative quote and validation.

Suggested input:

```ts
{
  productId: string;
  quantity: number;
}
```

Return:

- requested quantity;
- valid/invalid quantity;
- MOQ;
- case pack;
- unit price;
- subtotal;
- price tiers;
- nearest valid quantities if invalid;
- stock;
- currency.

The LLM must not be the authoritative calculator.

#### `get_draft_order` — read-only

Strategic centerpiece. Reads the actual current wholesale draft order after human intervention.

#### `set_draft_order_item` — mutating

Target-state quantity setter. Server validates MOQ, case pack, stock and price tier. Return complete authoritative draft order. Idempotent for same desired state.

#### `get_delivery_terms` — read-only

Return valid local delivery/pickup terms for the current draft.

#### purchase order / final order

Prefer native Declarative WebMCP if stable. Otherwise use safe preparation plus explicit human confirmation.

Final wholesale mutation must use idempotency and update supplier inventory/reservation exactly once.

---

## 6. Authoritative-state invariant

For mutable business state:

```text
database/app state > WebMCP read > ChatGPT conversational memory
```

Whenever the human can directly change an entity, ChatGPT must re-read that entity via WebMCP before a consequential continuation.

Retail handoff:

```text
agent modifies cart
→ human manually edits cart
→ user: “Seguimos desde acá”
→ get_cart()
→ agent resumes from current cart
```

Wholesale handoff:

```text
agent modifies draft
→ human manually edits draft
→ user asks to continue
→ get_draft_order()
→ agent resumes from current draft
```

This is the central proof of the project.

---

## 7. Mutation safety

Required:

1. Final order creation uses idempotency keys.
2. Repeated key returns the existing order.
3. Stock/reservation mutation is in the same transaction as order creation where practical.
4. Item tools set target state rather than increment/decrement blindly.
5. Tool errors are structured.
6. Do not automatically retry ambiguous mutations unless idempotency makes it safe.
7. Final consequential action requires explicit human confirmation.

Suggested error shape:

```ts
{
  code: string;
  message: string;
  recoverable: boolean;
  details?: Record<string, unknown>;
}
```

Useful codes:

```text
out_of_stock
invalid_quantity
below_moq
invalid_case_pack
price_changed
cart_empty
draft_empty
invalid_delivery
stale_state
already_completed
```

Use seeded internal data. No critical external API may determine whether the competition demo succeeds.

---

## 8. WebMCP design rules

1. One clear responsibility per tool.
2. Avoid overlapping semantic tools.
3. Keep schemas small.
4. Return structured data, not prose blobs.
5. Business validation is deterministic server-side logic.
6. Use current-spec read-only annotations such as `readOnlyHint` only after verifying the current API.
7. Tool descriptions must state exactly when they should be used.
8. Mutating tools return resulting authoritative state.
9. Visible UI updates after mutations.
10. Do not create tools for reasoning the model can already do (`recommend`, `compare`, `decide`).
11. Do create tools for facts/actions only the site can authoritatively provide (`stock`, `prices`, `cart`, `draft`, `delivery`, `prepare`, `submit`).
12. Isolate experimental WebMCP API details in a small adapter/registration layer rather than scattering browser-specific calls throughout the UI.

Do not present a dev polyfill, screen automation or scraping fallback as final WebMCP behavior.

---

## 9. Site-tools observability

Each demo page should have a small hidden-by-default demo inspector that can show:

- registered tool names;
- read-only vs mutating annotation where supported;
- last tool executed;
- timestamp;
- high-level input/output status.

Never expose secrets or chain-of-thought.

Use this only briefly in demo/screenshots to prove real WebMCP. If ChatGPT Desktop's native Site-tools indicator is visible/readable, prefer showing that as stronger evidence.

---

## 10. Minimal implementation architecture

Use the smallest stack that can make the demo reliable.

Preferred unless Milestone 0 proves a concrete incompatibility:

- Next.js App Router + TypeScript;
- React;
- shadcn/ui primitives;
- Postgres persistence (Neon/Vercel Postgres/Supabase Postgres acceptable);
- Drizzle or similarly lightweight typed data access;
- Playwright for E2E;
- Vercel deployment unless Site-tools testing proves another host is required.

No custom LLM API/backend is required for the core demo because ChatGPT Desktop is the agent.

Minimal entities:

Retail:

```text
Product
ProductVariant (optional)
Cart
CartItem
Order
OrderItem
InventoryMovement or stock fields
```

Wholesale:

```text
WholesaleProduct
Supplier
PriceTier
DraftOrder
DraftOrderItem
WholesaleOrder
WholesaleOrderItem
Inventory/Reservation
DeliveryTerm
```

Use a simple demo-session identifier instead of full auth unless auth is truly required.

Provide a reset mechanism restoring seeded stock, carts/drafts, orders and demo session state.

---

## 11. Competitive observability and optional measurement

Do not spend MVP time recreating a benchmark suite.

If both flows are stable early, optionally measure one representative WebMCP task:

- success;
- elapsed time;
- model/tool interaction steps;
- token usage only if reliably available.

Any performance claim must be measured on this project and documented reproducibly. Do not borrow WindTunnel numbers.

WebMCP Kit may be used by Codex as development/verification tooling if useful, but generated tools must be manually reviewed against the frozen contracts above. WebMCP Kit is not part of the product differentiation.

---

## 12. Build order — deadline driven

### Milestone 0 — Native Site-tools proof (BLOCKING)

Before building the product:

- create/deploy one top-level test page;
- register one read tool;
- register one safe mutation tool;
- verify discovery and execution in **ChatGPT Desktop built-in browser**;
- verify page UI visibly changes after mutation;
- record exact API/runtime behavior in `docs/webmcp-current-state.md`;
- verify Chrome separately only after ChatGPT works if useful for submission/judging.

**Stop if this is not native WebMCP/Site tools.**

Required first handoff:

```text
Native Site-tools/WebMCP verification: PASS/FAIL
Environment used:
Current API shape verified:
Read tool tested:
Mutation tool tested:
Visible page-state mutation confirmed:
ChatGPT discovery confirmed:
Known limitations:
Repo / branch / commit:
Next step:
```

### Milestone 1 — Retail read-modify-read vertical slice

Build only:

```text
search → add → HUMAN EDIT → get_cart → resume → human-confirmed final order → admin proof
```

Crude UI is acceptable until this works twice from clean reset.

### Milestone 2 — Wholesale generality proof

Build only:

```text
discover → quote → draft → HUMAN EDIT → get_draft_order → resume → human-confirmed PO → supplier proof
```

### Milestone 3 — competition polish

Only after Milestones 1–2 work:

- shadcn-inspired visual system;
- collaboration mode;
- comparison/summary/form components;
- subtle human/agent state cues;
- capability display grounded in real tools;
- responsive layout.

### Milestone 4 — declarative forms

Verify native Declarative WebMCP in the actual final runtime. If unstable, use the documented imperative preparation fallback and disclose the limitation. Human confirmation remains mandatory.

### Milestone 5 — reliability and recording

- demo reset;
- idempotency;
- transaction safety;
- two clean E2E runs;
- hosted environment verification;
- final recording + backup recording;
- freeze submission build.

---

## 13. Explicit scope cuts

Do not implement before submission:

- Hermes integration;
- multi-agent coordination machinery unless multiple Codex sessions are actually introduced;
- cross-origin iframe architecture;
- custom universal agent shell;
- embedded second LLM/chat;
- generic LLM UI planner;
- international trade/import features;
- external supplier APIs;
- real payments;
- readiness auditor;
- website generator;
- more verticals;
- Aura integration;
- analytics/CRM;
- autonomous market research;
- avatars/voice/mobile app.

Two excellent top-level demos beat ten mediocre ones.

---

## 14. Final demo target — under 3 minutes

### 0:00–0:15

Frame the problem:

> Websites used to make agents guess what they could do. WebMCP lets the page declare it. We focused on what happens next: can the human and the agent truly share control of the same live application?

### 0:15–1:05 — retail

- vague workspace goal;
- real Site tools;
- cart appears;
- human manually changes real cart;
- “Seguimos desde acá”;
- ChatGPT re-reads and adapts;
- human-confirmed order;
- 3–5 second admin proof.

### 1:05–1:20 — reveal

> **This was not a retail agent.**

Navigate to wholesale in the same ChatGPT conversation and expose the different capability set.

### 1:20–2:20 — wholesale

- vague merchant procurement goal;
- real catalog + quote facts;
- draft order;
- human manually changes quantity;
- ChatGPT re-reads draft and adapts;
- human-confirmed purchase order;
- supplier proof.

### 2:20–2:45

Briefly show why WebMCP matters:

```text
page capabilities → ChatGPT
human edits page ↔ authoritative state ↔ ChatGPT re-reads
```

Optionally show native Site-tools indicator or our small inspector.

### 2:45–2:58

> **The page provides the capabilities. The model provides the intelligence. The human stays in control.**

---

## 15. Acceptance criteria

### Native WebMCP

- [ ] `/retail` and `/wholesale` are top-level pages.
- [ ] ChatGPT Desktop built-in browser discovers real Site tools.
- [ ] No iframe-only dependency.
- [ ] No scraping fallback presented as WebMCP.
- [ ] Tool registration/execution can be inspected.

### Differentiation

- [ ] Retail visibly demonstrates agent → human manual edit → `get_cart` → correct resume.
- [ ] Wholesale visibly demonstrates agent → human manual edit → `get_draft_order` → correct resume.
- [ ] Human approval alone is not presented as innovation.
- [ ] Dynamic discovery alone is not presented as innovation.

### Same-agent proof

- [ ] Same ChatGPT conversation moves retail → wholesale.
- [ ] No RetailAgent/WholesaleAgent exists.
- [ ] No site-specific LLM prompt swap is required.

### Real consequences

- [ ] Retail order persists exactly once.
- [ ] Retail stock change visible in admin proof.
- [ ] Wholesale order persists exactly once.
- [ ] Wholesale inventory reservation/delta visible in supplier proof.

### Human control

- [ ] Normal website remains manually usable.
- [ ] Human can edit mutable state mid-task.
- [ ] ChatGPT re-reads current state before continuing.
- [ ] Final sensitive action receives explicit human confirmation.

### Reliability

- [ ] Reset works.
- [ ] Two consecutive clean full runs pass.
- [ ] Repeated confirmation/retry cannot duplicate orders.
- [ ] Invalid wholesale quantities yield deterministic structured errors.
- [ ] Hosted build works in exact final browser path.

### Submission

- [ ] Public hosted project.
- [ ] Public open-source repository and license per current rules.
- [ ] Demo video under 3 minutes with audio.
- [ ] README maps project to WebMCP leverage, execution, impact and creativity/ambition.
- [ ] Final rule-compliance check complete.
- [ ] Submission build frozen after entry according to current rules.

---

## 16. Codex immediate instructions

1. Read this `AGENTS.md` completely.
2. Read `docs/webmcp-current-state.md`.
3. Verify current OpenAI Site tools docs, WebMCP spec and challenge rules for drift.
4. Confirm that work is happening in `ejaircastillo/webmcp-shared-control`, not the planning repository.
5. Execute **Milestone 0 only** first.
6. Verify inside ChatGPT Desktop's built-in browser.
7. Record evidence and update `docs/webmcp-current-state.md` with observed runtime/API facts.
8. Only after Milestone 0 passes, implement the retail vertical slice.
9. Do not build custom chat/agent infrastructure.
10. Do not start visual polish before read-modify-read retail works end-to-end.
11. Commit each proven milestone separately with validation evidence.
12. If native Site tools cannot be verified, stop and report the blocker instead of constructing a fake replacement.

## 17. Definition of success

A judge should conclude, without an architecture lecture:

1. the page explicitly exposes what it can do;
2. ChatGPT uses real structured WebMCP capabilities rather than screen scraping;
3. the human can interrupt and modify the application directly;
4. ChatGPT can re-read what the human changed and continue correctly;
5. the same conversation does this on a materially different site;
6. the operations are real because business-side state changes;
7. this feels like a plausible interaction model for the agentic web.

If a proposed feature does not strengthen one of those seven conclusions, it is probably outside the competition scope.
