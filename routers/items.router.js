const { Router } = require("express");
const itemsController = require("../controllers/items.controller");
const itemsApiController = require("../controllers/itemsApi.controller");

const router = Router();

router.get("/list", itemsController.listPage);
router.get("/about", itemsController.aboutPage);
router.get("/list/add", itemsController.addPage);
router.post("/list", itemsController.addItem);
router.post("/list/:id/delete", itemsController.deleteItem);

// API router
router.get("/api/items", itemsApiController.getItems);
router.get("/api/items/:id", itemsApiController.getDetailItems);
router.post("/api/items", itemsApiController.addItems);
router.put("/api/items/:id", itemsApiController.editItems);
router.delete("/api/items/:id", itemsApiController.deleteItems);

module.exports = router;
