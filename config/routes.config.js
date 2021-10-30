const express = require("express");
const router = express.Router();

const EmployeesController = require("../controllers/employees");

// Routes here
router.get("/employees", EmployeesController.getAll);
router.get("/employees/oldest", EmployeesController.getOldest);

module.exports = router;