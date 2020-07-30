const express = require("express");
const app = express();
const mysql = require("mysql");
const port = process.env.PORT || 3000;

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

con.connect(function (err) {
  if (err) {
    console.log("Error connecting to db: ", err);
    return;
  }
  console.log("Mysql connected success...");
  con.query(
    "CREATE TABLE IF NOT EXISTS customers (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, ts BIGINT)",
    (err) => {
      if (err) throw err;
    }
  );
});

// Request handling
app.get("/", (req, res) => {
  // create table if not exist
//   con.query("INSERT INTO visits (ts) values (?)", Date.now(), (err, dbRes) => {
//     if (err) throw err;
//     res.send("Hello World! You are visitor number " + dbRes.insertId);
//   });
res.status(200).json({'status': 'it works'});
});

// server
app.listen(port, () => console.log(`http://localhost:${port}`));
