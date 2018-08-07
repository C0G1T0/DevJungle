const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Check if data is empty, if it is return an empty string
  // because validator can only check string
  // for instance if user doesn't submit something
  // it will come in as null or undefined
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Return errors and isValid if there is no error
  // we use isValid at the beginning of our route to validate
  // before using data
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
