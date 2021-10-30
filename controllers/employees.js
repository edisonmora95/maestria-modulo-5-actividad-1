const { Request, Response, NextFunction } = require("express");

const employees = require("../data/employees.json");

/**
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getAll = (req, res, next) => {
  try {
    const data = employees;

    return res.status(200).send({
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

module.exports = {
  getAll,
};
