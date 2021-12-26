const express = require("express");
const path = require("path");
const app = express();

const client = path.join(__dirname, "/githuber/build");

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server running"));

app.use(express.static(client));
