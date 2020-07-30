const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello #dylut2000!");
});

app.listen(port, () => console.log(`http://localhost:${port}`));