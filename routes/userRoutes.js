const express = require('express');
const router = express.Router();
const {
  loginController,
  registerController,authController,applyDoctorController,getAllNotificationController,deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController

} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
// Middleware to prevent caching
// router.use((req, res, next) => {
//   res.setHeader('Cache-Control', 'no-store');
//   next();
// });
//router object
// const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

// //APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification  Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
// //Notification  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

// //GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// //BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//Booking Availability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;