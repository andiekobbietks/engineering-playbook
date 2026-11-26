import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignored = new Set([".git", "node_modules", ".github/scripts"]);
const markdownFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) markdownFiles.push(full);
  }
}

walk(root);
const errors = [];

for (const file of markdownFiles) {
  const source = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);

  if (!source.trim()) errors.push(`${relative}: file is empty`);
  if (!source.endsWith("\n")) errors.push(`${relative}: missing final newline`);
  if (/[\t ]+$/m.test(source)) errors.push(`${relative}: trailing whitespace`);

  const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
  for (const match of source.matchAll(linkPattern)) {
    const destination = match[1].trim().split(/\s+/)[0];
    if (!destination || /^(https?:|mailto:|#)/i.test(destination)) continue;
    const clean = decodeURIComponent(destination.split("#")[0].split("?")[0]);
    if (!clean) continue;
    const target = path.resolve(path.dirname(file), clean);
    if (!target.startsWith(root + path.sep) && target !== root) {
      errors.push(`${relative}: link escapes repository: ${destination}`);
    } else if (!fs.existsSync(target)) {
      errors.push(`${relative}: broken local link: ${destination}`);
    }
  }
}

if (markdownFiles.length === 0) errors.push("No Markdown files found.");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${markdownFiles.length} Markdown files: non-empty, clean whitespace, final newlines and local links resolved.`);
