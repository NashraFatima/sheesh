const express = require("express");
const {
  createReservation,
  deleteReservation,
  getReservation,
  getReservations,
  updateReservation,
} = require("../controllers/reservationController");
const { protect } = require("../middleware/authMiddleware");
const { validateRequest } = require("../middleware/validateRequest");
const {
  idParam,
  reservationCreateValidator,
  reservationListValidator,
  reservationUpdateValidator,
} = require("../validators/reservationValidator");

const router = express.Router();

router.post("/", reservationCreateValidator, validateRequest, createReservation);
router.get("/", protect, reservationListValidator, validateRequest, getReservations);
router.get("/:id", protect, idParam, validateRequest, getReservation);
router.put("/:id", protect, reservationUpdateValidator, validateRequest, updateReservation);
router.delete("/:id", protect, idParam, validateRequest, deleteReservation);

module.exports = router;
