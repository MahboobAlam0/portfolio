const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src', 'assets', 'images', 'ProjectImages');
try {
  const res = [];
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f.toLowerCase().endsWith('.png')) {
      const p = path.join(dir, f);
      const m = fs.statSync(p).mtime;
      if (Date.now() - m.getTime() < 10 * 60 * 1000) {
        res.push({ file: p, mtime: m });
      }
    }
  }
  console.log(JSON.stringify(res, null, 2));
} catch (err) {
  console.error('Error listing PNGs:', err.message);
  process.exit(1);
}
