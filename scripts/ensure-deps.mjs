import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const vitePkg = path.resolve('node_modules', 'vite', 'package.json');
if (!fs.existsSync(vitePkg)) {
  console.log('Vite not found in node_modules; installing dependencies...');
  execSync('npm install --include=dev', { stdio: 'inherit' });
}
