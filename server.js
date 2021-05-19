const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    res.end();

})

app.listen(3000, () => {
    console.log("server is running!");
})