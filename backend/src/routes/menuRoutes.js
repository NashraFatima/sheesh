const express = require("express");
const {
  createMenuItem,
  deleteMenuItem,
  getMenuItem,
  getMenuItems,
  updateMenuItem,
} = require("../controllers/menuController");
const { protect } = require("../middleware/authMiddleware");
const { validateRequest } = require("../middleware/validateRequest");
const {
  menuIdParam,
  menuListValidator,
  menuPayloadValidator,
  menuUpdateValidator,
} = require("../validators/menuValidator");

const router = express.Router();

router.get("/", menuListValidator, validateRequest, getMenuItems);
router.get("/:id", menuIdParam, validateRequest, getMenuItem);
router.post("/", protect, menuPayloadValidator, validateRequest, createMenuItem);
router.put("/:id", protect, menuUpdateValidator, validateRequest, updateMenuItem);
router.delete("/:id", protect, menuIdParam, validateRequest, deleteMenuItem);

module.exports = router;
