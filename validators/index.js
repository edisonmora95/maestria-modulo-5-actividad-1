/**
   * @param {import("joi").ValidationError} error
   */
const _getMessage = (error = {}) => {
  const { details } = error;
  if (!details) {
    return "";
  }
  return details.map(msg => msg.message).join(",");
};

const validate = (payload, schema) => {
  if (!schema) {
    throw new Error("Missing validator schema");
  }

  const { error } = schema.validate(payload);

  const isValid = !error;
  let message = "";
  if (!isValid) {
    message = _getMessage(error);
  }

  return {
    isValid,
    message,
  };
};

module.exports = {
  validate,
};
