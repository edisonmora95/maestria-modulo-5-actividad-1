const { Request, Response, NextFunction } = require("express");

const employees = require("../data/employees.json");

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getAll = (req, res, next) => {
  try {
    const { page, user, badges } = req.query;
    const limit = 1;

    let data = employees;
    if (!!user) {
      data = data.filter((x) => x.privileges === "user");
    }

    if (badges) {
      data = data.filter((x) => x.badges.includes(badges));
    }

    if (page) {
      const start = 2 * (page - 1);
      const end = (2 * (page - 1)) + limit + 1;
      data = data.slice(start, end);
    }

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

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getOldest = (req, res, next) => {
  try {
    let data = employees;

    const result = data.sort((x, y) => y.age - x.age)[0];

    return res.status(200).send({
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const addOne = (req, res, next) => {
  try {
    const {
      name,
      age,
      phone,
      privileges,
      favorites,
      finished,
      badges,
      points,
    } = req.body;

    const employee = {
      name,
      age,
      phone,
      privileges,
      favorites,
      finished,
      badges,
      points,
    };

    employees.push(employee);

    return res.status(200).send({
      data: employee,
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
  getOldest,
  addOne,
};
