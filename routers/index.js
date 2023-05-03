const { Router } = require("express");

const itemsRouter = require("./items.router");

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Server Connected" });
});

router.use(itemsRouter);

module.exports = router;
