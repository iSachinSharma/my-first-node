const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to your first Node project! check git again chec");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
