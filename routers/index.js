const { Router } = require("express");
const itemsRouter = require("./items.router");
const itemsController = require("../controllers/items.controller");

const router = Router();

router.get("/", itemsController.indexPage, (req, res) => {
  // res.json({ msg: "Server Connected" });
  res.render("pages/index");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.use(itemsRouter);

module.exports = router;
