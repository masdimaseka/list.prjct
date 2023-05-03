const { Router } = require("express");
// const ItemsController = require("../controllers/items.controller");
const itemsApiController = require("../controllers/itemsApi.controller");

const router = Router();

// API router
router.get("/api/items", itemsApiController.getItems);
router.get("/api/items/:id", itemsApiController.getDetailItems);
router.post("/api/items", itemsApiController.addItems);
router.put("/api/items/:id", itemsApiController.editItems);
router.delete("/api/items/:id", itemsApiController.deleteItems);

module.exports = router;
