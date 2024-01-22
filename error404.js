function response404(req, res){
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write(`<html>
  <head></head>
  <body>
  <h1></h1>
  <p>'Такой страницы не найдено'</p>
  </body>
  </html>
  `);

      res.end();
}
module.exports = response404