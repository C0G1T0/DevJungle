const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  // Check if data is empty, if it is return an empty string
  // because validator can only check string
  // for instance if user doesn't submit something
  // it will come in as null or undefined
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
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
