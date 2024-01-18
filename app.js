const express = require("express");
const cors = require("cors");
const db = require("./db/conn");
const routes = require("./routes/router");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
    console.log("Servidor online!");
});
