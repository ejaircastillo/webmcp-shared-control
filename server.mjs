import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, extname, join, normalize } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.WEBMCP_PORT ?? 4173);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function resolveAsset(pathname) {
  const requested = pathname === "/" || pathname.endsWith("/")
    ? `${pathname}index.html`
    : pathname;
  const relative = normalize(requested).replace(/^([.][.][/\\])+/, "");
  const candidate = join(root, relative);
  return candidate.startsWith(root) ? candidate : null;
}

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`).pathname;
  let filePath = resolveAsset(pathname);

  if (!filePath || !existsSync(filePath)) {
    filePath = join(root, "index.html");
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      "cache-control": "no-store",
      "content-type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
    });
    response.end(content);
  } catch (error) {
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end(String(error));
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`WebMCP Shared Control listening at http://127.0.0.1:${port}/`);
});
