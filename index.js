const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("SBP is running");
  } else {
    res.write("Route not found");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
