const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(srcDir);

let changedFiles = [];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace links
  content = content.replace(/https:\/\/www\.linkedin\.com\/company\/ahcareer\//g, "https://in.linkedin.com/in/atishjain9");
  content = content.replace(/https:\/\/www\.linkedin\.com\/in\/atish-jain/g, "https://in.linkedin.com/in/atishjain9");
  
  content = content.replace(/https:\/\/www\.instagram\.com\/ah_career_rajahmundry/g, "https://www.instagram.com/atishjain_official/");
  content = content.replace(/https:\/\/www\.instagram\.com\/ahcareer/g, "https://www.instagram.com/atishjain_official/");
  
  content = content.replace(/https:\/\/www\.facebook\.com\/share\/18nvUvNp8m\//g, "https://www.facebook.com/atishkumarjain/");
  content = content.replace(/https:\/\/www\.facebook\.com\/ahcareer/g, "https://www.facebook.com/atishkumarjain/");
  
  content = content.replace(/https:\/\/t\.me\/codingwithai_atishjain/g, "https://t.me/+VVgdlVS9giNanSYN");
  // Some links might be without https, just keep an eye out

  // Handle landline (e.g. 0883-2425028, 0883 242 5028, etc)
  // Let's remove the whole line or block with landline if it's in contact info
  // This is tricky so we will just remove the specific text if it's there
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles.push(file);
  }
});

console.log("Files updated for social links:", changedFiles);
