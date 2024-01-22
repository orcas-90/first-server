const http = require('http');
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const response404 = require('./error404');
let json;

const server = http.createServer((req, res) => {

  const url = req.url;
  console.log(url);
  try {
    if (url === '/') {
      json = fs.readFileSync(path.join(__dirname, url + 'index.json'), {
        encoding: 'utf8',
      });
    } else {
      json = fs.readFileSync(path.join(__dirname, url + '.json'), {
        encoding: 'utf8',
      });
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      response404(req,res)
      return
    }
  }

  let objJson = JSON.parse(json);
  let title = objJson.title;
  let content = objJson.content;

  res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      "Access-control-allow-origin": '*'});
  res.write(/*`<html>
      <head></head>
      <body>
      <h1>${title}</h1>
      <p>${content}</p>
      </body>
      </html>
  `*/JSON.stringify({title , content},
  ));

  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
