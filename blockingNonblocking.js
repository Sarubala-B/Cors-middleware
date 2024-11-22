const fs = require('fs');

// Blocking - reading a file synchronously
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

console.log('This will execute after reading the file');


// Non-blocking - reading a file asynchronously
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('This will execute before reading the file completes');
