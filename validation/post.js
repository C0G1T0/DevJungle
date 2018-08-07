const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // Check if data is empty, if it is return an empty string
  // because validator can only check string
  // for instance if user doesn't submit something
  // it will come in as null or undefined
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Password field is required";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  // Return errors and isValid if there is no error
  // we use isValid at the beginning of our route to validate
  // before using data
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
