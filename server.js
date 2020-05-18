const express = require("express");
const http = require("http");
const path = require("path");
let app = express();
// app.use(express.static(path.join(__dirname, "build")));
app.use("*", (req, res) =>
  res.status(200).send({
    message: "Not found, try to add /api/v1 to access the api",
  })
);
const port = process.env.PORT || "9000";
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
