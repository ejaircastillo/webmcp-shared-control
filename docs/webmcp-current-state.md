# WebMCP Challenge 2026 — Current State

> Verified: 2026-09-01
> Purpose: fast-moving facts that can invalidate implementation assumptions.
> Rule: re-check the official sources before final submission.

## Competition facts

- Official submission deadline: **2026-09-03 at 1:00 PM Pacific Time**.
- In Argentina (UTC-3 on that date): **2026-09-03 at 17:00**.
- Submission requires a working hosted project, a public source repository with an open-source license, a project description, and a demo video under 3 minutes with audio.
- Judges are not required to build the project locally. The live URL must work directly in the supported judging environment.
- Challenge resources explicitly support testing in ChatGPT's in-app browser or Google Chrome with WebMCP enabled.
- After the submission period closes, do not modify the submitted Devpost entry, public repo, or live site during judging. If continued development is desired, fork/copy the project and leave the submitted version frozen.

Official sources:

- https://openai.com/webmcp-challenge/
- https://webmcp.devpost.com/rules
- https://webmcp.devpost.com/resources

## OpenAI Site tools / ChatGPT

OpenAI's current implementation of WebMCP is named **Site tools**.

Verified behavior:

- Site tools are available in the built-in browser of the ChatGPT desktop app when the account/model has access and the current page exposes compatible tools.
- ChatGPT automatically discovers tools from the **current live page** and uses the page's current state and signed-in session.
- Human and ChatGPT can work on the same page in real time and see changes as they occur.
- The address bar exposes a site-tools indicator and shows which tools can read or change information.
- Site tools are page-scoped. A tool from one page does not carry to another page/site.
- Tools provided **only by embedded content are currently not supported**. Do not make an iframe-only architecture the competition path.
- Site tools are currently a ChatGPT desktop built-in-browser feature, not a ChatGPT feature inside ordinary Chrome.
- ChatGPT requires confirmation before sensitive actions such as purchases, sharing personal information, deleting data, changing account permissions, or sending messages.

Official source:

- https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app

### Consequence for this project

The final demonstration should use each demo application as a **top-level page** in ChatGPT's built-in browser. The primary conversational agent is ChatGPT itself. The website remains the shared, editable visual workspace.

Do not depend on:

- an iframe containing the only WebMCP tools;
- a second custom LLM merely to recreate the ChatGPT conversation inside the site;
- a browser-scraping fallback presented as WebMCP.

## Chrome / WebMCP

Chrome remains a secondary verification path for the challenge using the WebMCP testing/origin-trial path documented by Chrome. The exact current flag/API must be re-verified before use.

Official references:

- https://developer.chrome.com/docs/ai/webmcp
- https://developer.chrome.com/docs/ai/webmcp/imperative-api
- https://developer.chrome.com/docs/ai/webmcp/declarative-api
- https://developer.chrome.com/docs/ai/webmcp/best-practices
- https://webmachinelearning.github.io/webmcp/
- https://github.com/webmachinelearning/webmcp

## Competitive landscape that changes our positioning

### GoogleChromeLabs WebMCP Page Agent

Chrome Labs already demonstrates dynamic discovery and execution of WebMCP tools from arbitrary compatible pages. Therefore, **"one agent that discovers tools on any WebMCP page" is not enough as the project's novelty claim**.

Reference:

- https://github.com/GoogleChromeLabs/webmcp-tools/tree/main/demos/page-agent

### Open for Agents Storefront

The Chrome Labs showcase now includes **Open for Agents Storefront**, a live WordPress/WooCommerce agent-ready storefront. Its positioning overlaps with ecommerce, reviewed capabilities, human approval, and real cart changes.

Consequence:

- ecommerce + human approval alone is no longer a sufficient differentiator;
- our retail flow is the setup, not the final punchline;
- the demo must visibly prove **bidirectional handoff**: agent acts → human changes the real app manually → agent re-reads authoritative state through WebMCP → agent continues correctly;
- the second wholesale application must prove the same interaction model across a materially different tool catalog.

Reference:

- https://github.com/GoogleChromeLabs/webmcp-tools/blob/main/AWESOME_WEBMCP.md

### WebMCP Kit

WebMCP Kit can inspect a codebase, propose a WebMCP tool plan, implement tools, and verify them in a real browser. It supports Codex.

Use policy for this project:

- allowed as **development/verification tooling** if it saves time;
- not a product dependency or source of differentiation;
- native browser inspection and the current official WebMCP API remain the final acceptance source.

Reference:

- https://github.com/nekuda-ai/webmcp-kit

### WindTunnel

WindTunnel benchmarks WebMCP against other browser-agent interfaces using task success, time, token usage, and cost.

Use policy:

- its methodology is useful inspiration for an optional evaluation;
- never repeat its published performance numbers as if they were results from our application;
- any performance claim in our submission must be measured on our own flow and documented reproducibly.

Reference:

- https://github.com/nekuda-ai/WindTunnel

## Current competition thesis

Do not pitch the project as:

- another ecommerce assistant;
- a universal Page Agent;
- an approval workflow;
- a chatbot wrapper around WebMCP.

Pitch it as:

> **A shared interface for the agentic web: the page exposes authoritative capabilities, ChatGPT acts through them, the human can take over the live page at any moment, and the agent can re-read the changed state and continue without breaking the flow.**

The proof is two top-level applications using the same ChatGPT conversation:

1. retail workspace ecommerce;
2. local wholesale procurement.

Both end with persisted application-side consequences visible from the business side.


## Milestone 0 verification record

> Recorded: 2026-09-01  
> Status: **FAIL / BLOCKED — native Site-tools verification not completed**

### Required first handoff

- Native Site-tools/WebMCP verification: **FAIL (environment blocker)**
- Environment intended: ChatGPT Desktop built-in browser, top-level local page at `http://127.0.0.1:4173/`
- Current API shape verified: top-level JavaScript registration with `document.modelContext.registerTool({ name, description, inputSchema, annotations, execute })`
- Read tool implemented: `get_demo_state` (read-only)
- Mutation tool implemented: `set_demo_state` (safe target-state mutation, 0–100)
- Visible page-state mutation confirmed: **not verified in the ChatGPT built-in browser**; the page includes a normal human control and visible state rendering for the pending test
- ChatGPT discovery confirmed: **not verified**
- Known limitations from current official docs: the ChatGPT built-in browser currently does not expose declarative form-attribute tools or tools registered inside iframes; tools must be registered in the top-level page
- Repository / branch / commit: `ejaircastillo/webmcp-shared-control` / `main` / `6492918` (server artifact; page artifact commit `81dc02a`)
- Next step: restore the browser-control runtime, open the top-level test page in ChatGPT Desktop, inspect the Site tools indicator, execute `get_demo_state`, execute `set_demo_state`, confirm the visible value changes, then update this record to PASS with evidence

### Environment blocker

The browser-control runtime could not start. `mcp__node_repl__js` exited before connecting with:

```text
windows sandbox failed: helper_unknown_error: apply deny-read ACLs
```

A minimal runtime probe and a kernel reset were both attempted; the same error persisted. No discovery or tool execution claim is being made from this environment.

### References checked

- [OpenAI Site tools documentation](https://learn.chatgpt.com/docs/webmcp)
- [OpenAI WebMCP Challenge](https://openai.com/webmcp-challenge/)
- [WebMCP Challenge official rules](https://webmcp.devpost.com/rules)
- [Chrome WebMCP developer guide](https://developer.chrome.com/docs/ai/webmcp)


## MVP implementation and UI validation

> Recorded: 2026-09-01  
> Status: **IMPLEMENTED / UI-VALIDATED — native Site-tools verification still blocked**

The standalone target repository is now public at `ejaircastillo/webmcp-shared-control`, with an MIT license and a zero-build Node/vanilla-JS demo. The implementation is published on `main`:

- MVP implementation: `33fac50` — retail and wholesale shared-control vertical slices.
- Event-binding fix: `cdabb91` — delegated UI listeners are bound once per page shell; this prevents duplicate checkout actions after re-render.
- Routes: `/`, `/retail`, `/retail/admin`, `/wholesale`, and `/wholesale/supplier`.
- The page is top-level and registers route-specific tools through `document.modelContext.registerTool` when the host exposes the API. No iframe-only tools or custom LLM are required.

### Implemented tool catalogs

- Retail: `search_products`, `get_product_details`, `get_cart`, `set_cart_item`, `get_fulfillment_options`, `prepare_checkout`, and `submit_retail_order`.
- Wholesale: `discover_products`, `get_wholesale_quote`, `get_draft_order`, `set_draft_order_item`, `get_delivery_terms`, `prepare_purchase_order`, and `submit_wholesale_order`.
- Admin and supplier routes expose read-only operational snapshots for the consequences of each final mutation.

### Safety and handoff semantics

- The authoritative cart/draft is persisted in browser storage and rendered visibly.
- A human UI edit records a fresh activity event; the UI explicitly tells the next agent step to begin with `get_cart` or `get_draft_order`.
- Preparation is non-mutating. Final retail/wholesale submission requires prior visible human confirmation and an idempotency key.
- Stock/reservations change only at final submission; repeated keys return the existing order instead of applying the mutation twice.
- Retail validates product existence, exact quantities, stock, and delivery options. Wholesale validates MOQ, case-pack alignment, stock, price tier, and delivery-term availability.

### Browser UI validation

A same-session local browser run on 2026-09-01 exercised both top-level applications:

1. Retail: added desk, chair, and lamp; manually changed the lamp from 1 to 2; prepared and confirmed checkout; submitted `RET-0001`; the retail operations page showed 1 confirmed order and a -4 unit stock delta.
2. Wholesale: navigated to the distinct catalog; added 24 reflector units; manually changed the draft to 36; prepared and confirmed the PO; submitted `WHO-0001`; the supplier page showed 36 reserved units and the corresponding stock reduction.

This Playwright run validates the visible application behavior only. Its normal browser correctly displayed `WebMCP no disponible en este navegador`; it is not evidence of native Site-tool discovery or execution.

### Remaining acceptance blockers

- The ChatGPT Desktop browser-control runtime still fails before connecting with `windows sandbox failed: helper_unknown_error: apply deny-read ACLs`. Therefore the Milestone 0 record remains FAIL/BLOCKED and no native Site-tool PASS claim is made.
- The hosted public deployment is ready. The required sub-three-minute demo video and native Site-tools evidence remain before a final challenge submission.


## Hosting verification

> Recorded: 2026-09-01  
> Status: **PRODUCTION URL READY — native Site-tools verification still blocked**

The demo is deployed to Vercel and connected to the public GitHub repository:

- Production URL: https://webmcp-shared-control.vercel.app/
- Judging routes: `/retail`, `/retail/admin`, `/wholesale`, `/wholesale/supplier`
- Verified production deployment at record time: `dpl_DgThKKyAVpcySYyx4oEbUC4W8e4K`
- Source commit verified at that deployment: `97f193c`
- Subsequent Git-connected production redeploys were also reported Ready; the canonical alias was rechecked after the final source/documentation pushes.
- The static Vercel configuration fixes framework detection with `"framework": null` and an empty build command, then serves the root SPA through explicit route rewrites. A favicon rewrite was added after the first public browser check.

External checks on 2026-09-01 returned HTTP 200 for the home page, all four judging routes, `app.js`, `styles.css`, and `favicon.ico`. Playwright loaded the public `/retail` page with the expected catalog, cart, and route navigation; the final console check reported zero errors and zero warnings.

The public browser check is UI evidence only. It does not replace native Site-tools discovery/execution evidence: the normal browser still reports `WebMCP no disponible en este navegador`, and the ChatGPT Desktop browser-control runtime remains blocked as recorded above.
