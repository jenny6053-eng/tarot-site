/* eslint-disable */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const cardsDir = path.join(__dirname, "../../content/cards");

if (!fs.existsSync(cardsDir)) {
  console.log("No content directory found at: " + cardsDir);
  process.exit(1);
}

const files = fs.readdirSync(cardsDir).filter(f => f.endsWith(".mdx"));

console.log("\n=================================");
console.log("    TAROT CARD DRAFT TRACKER     ");
console.log("=================================\n");

let drafts = [];
let finalized = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(cardsDir, file), "utf8");
  const { data } = matter(content);
  if (data.draft === true) {
    drafts.push(`${data.title || file} (${file})`);
  } else {
    finalized.push(`${data.title || file} (${file})`);
  }
});

console.log(`[DRAFT: TO REVIEW] (${drafts.length} cards)`);
drafts.forEach(d => console.log(`  [ ] - ${d}`));

console.log(`\n[FINALIZED: APPROVED] (${finalized.length} cards)`);
finalized.forEach(f => console.log(`  [x] - ${f}`));
console.log("\n=================================\n");
