import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const buildDir = path.resolve('build');

if (fs.existsSync(distDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
  fs.cpSync(distDir, buildDir, { recursive: true });
  console.log('Synced dist/ -> build/ for Render Static Site compatibility.');
}
