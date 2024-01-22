function response202(res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`<html>
    <head></head>
    <body>
    <h1>${title}</h1>
    <p>${content}</p>
    </body>
    </html>
    `);

    res.end();
}
module.exports = response202