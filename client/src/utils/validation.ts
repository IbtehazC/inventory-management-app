import * as yup from "yup";

function configureValidation() {
  yup.addMethod(yup.string, "firstLetterUppercase", function () {
    return this.test(
      "firest-letter-uppercase",
      "First letter must be uppercase",
      function (value) {
        if (value && value.length > 0) {
          const firstLetter = value.substring(0, 1);
          return firstLetter === firstLetter.toUpperCase();
        }
        return true;
      }
    );
  });
}

export default configureValidation;