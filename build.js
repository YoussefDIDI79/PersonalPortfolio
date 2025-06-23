#!/usr/bin/env node

// Simple build script for Vercel that only builds the frontend
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  console.log('Building frontend for Vercel...');
  
  // Build only the frontend (client)
  execSync('vite build --outDir dist client', {
    cwd: __dirname,
    stdio: 'inherit'
  });
  
  console.log('✅ Frontend build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}