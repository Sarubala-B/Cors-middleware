const http = require('http');
let data = [];
const port = 3001;

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    if (req.method === 'GET') {
      res.end(JSON.stringify(data));
    }
    else if (req.method === 'POST') {
      const item = JSON.parse(body);
      data.push(item);
      res.end('Item added');
    }
    else if (req.method === 'PUT') {
      const updatedItem = JSON.parse(body);
      data = data.map(item => item.id === updatedItem.id ? updatedItem : item);
      res.end('Item updated');
    }
    else if (req.method === 'DELETE') {
      const { id } = JSON.parse(body);
      data = data.filter(item => item.id !== id);
      res.end('Item deleted');
    }
  });
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
