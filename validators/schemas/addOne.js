const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
  phone: Joi.object().keys({
    personal: Joi.string().optional(),
    work: Joi.string().optional(),
    ext: Joi.string().optional(),
  }),
  privileges: Joi.string().required(),
  favorites: Joi.object().keys({
    artist: Joi.string().optional(),
    food: Joi.string().optional(),
  }).required(),
  finished: Joi.array().items(
    Joi.number(),
  ).required(),
  badges: Joi.array().items(
    Joi.string(),
  ).required(),
  points: Joi.array().items(
    Joi.object().keys({
      points: Joi.number().required(),
      bonus: Joi.number().required(),
    }),
  ).required(),
});

module.exports = schema;