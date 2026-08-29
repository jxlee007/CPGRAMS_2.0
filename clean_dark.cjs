const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Match dark: utility classes such as dark:bg-xxx, dark:text-xxx, dark:border-xxx, dark:hover:xxx
  const cleaned = content.replace(/\s*dark:[^\s"'`]+/g, '');
  if (cleaned !== content) {
    fs.writeFileSync(filePath, cleaned, 'utf8');
    console.log('Cleaned:', filePath);
  }
}

function walkDir(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.html') || full.endsWith('.css')) {
      cleanFile(full);
    }
  }
}

walkDir(path.join(__dirname, 'src'));
console.log('Done cleaning dark mode classes!');
