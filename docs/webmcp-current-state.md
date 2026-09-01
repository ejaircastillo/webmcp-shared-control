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
