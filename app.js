const express = require("express");
const app = express();
const routes = require("./routes/index");
const host = "127.0.0.1";
const port = 3000;

app.use(express.json());

app.use("/api", routes);

app.listen(port, host, () => {
    console.log(`Server listens http://${host}:${port}`);
});
