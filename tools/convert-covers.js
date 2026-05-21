const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'ProjectImages');
const files = [
  'litefishseg_cover.svg',
  'fishsegdet_cover.svg',
  'distill_cover.svg',
  'clinicalrag_cover.svg',
  'researchkit_cover.svg',
  'fishmonitoring_cover.svg'
];

async function convert() {
  for (const f of files) {
    const src = path.join(srcDir, f);
    const out = path.join(srcDir, f.replace(/\.svg$/i, '.png'));
    if (!fs.existsSync(src)) {
      console.warn('Missing source:', src);
      continue;
    }
    try {
      await sharp(src, { density: 300 })
        .resize(1600, 900, { fit: 'cover' })
        .png({ quality: 90 })
        .toFile(out);
      console.log('Wrote', out);
    } catch (err) {
      console.error('Failed', f, err.message);
    }
  }
}

convert().catch(err => { console.error(err); process.exit(1); });
