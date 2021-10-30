const express = require("express");
const router = express.Router();

const EmployeesController = require("../controllers/employees");
const EmployeesMiddleware = require("../middlewares/employees");

// Routes here
router.get("/employees", EmployeesController.getAll);
router.get("/employees/oldest", EmployeesController.getOldest);
router.post("/employees", EmployeesMiddleware.validateAddOne, EmployeesController.addOne);

module.exports = router;