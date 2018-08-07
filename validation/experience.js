const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // Check if data is empty, if it is return an empty string
  // because validator can only check string
  // for instance if user doesn't submit something
  // it will come in as null or undefined
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  // Return errors and isValid if there is no error
  // we use isValid at the beginning of our route to validate
  // before using data
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
