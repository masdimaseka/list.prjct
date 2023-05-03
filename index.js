const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const route = require("./routers");
const port = 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.json({ msg: "hello express" });
// });

app.use(route);

app.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});
