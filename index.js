const express = require('express');
const app = express();
const DBconnection = require("./database/connection");

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(express.json())


app.get('/', (req, res) => res.render("index"))
app.get('/cadastro', (req, res) => res.render("create"))
app.listen(3000, () => console.log(`Example app listening on port 3000!`))