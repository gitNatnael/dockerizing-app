const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "../dist")));
app.get('/test', (req, res) => {
    const x = path.join(__dirname, "dist");
    console.log(x)
    res.send('I am test')
})
app.get("/", (req, res) => {
    console.log(path.join(__dirname, "../dist"))
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
const port = 9091;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});