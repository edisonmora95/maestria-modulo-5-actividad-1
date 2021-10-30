const express = require("express");
const router = express.Router();

const EmployeesController = require("../controllers/employees");

// Routes here
router.get("/employees", EmployeesController.getAll);

module.exports = router;