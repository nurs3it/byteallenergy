#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function deleteTxtFiles(dir) {
  let deletedCount = 0;
  
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.txt')) {
        fs.unlinkSync(filePath);
        deletedCount++;
        console.log(`Deleted: ${filePath}`);
      }
    }
  }
  
  const outDir = path.join(process.cwd(), 'out');
  
  if (!fs.existsSync(outDir)) {
    console.log('Out directory does not exist. Skipping cleanup.');
    return;
  }
  
  walkDir(outDir);
  console.log(`\nCleaned up ${deletedCount} .txt file(s) from out directory.`);
}

deleteTxtFiles();

