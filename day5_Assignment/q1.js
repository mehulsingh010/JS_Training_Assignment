/* Create a validation class similar to ‘yup’ and add validations for required, min and max
for strings. Expose an isValid method that returns true or false based on the argument
passed */

class ValidationString {
  constructor() {
    this.rules = {
      required: false,
      minLength: null,
      maxLength: null,
    };
  }

  required() {
    this.rules.required = true;
    return this;
  }
  min(length) {
    this.rules.minLength = length;
    return this;
  }

  max(length) {
    this.rules.maxLength = length;
    return this;
  }

  isValid(input) {
    if (typeof input != "string") {
      return false;
    }
    if (this.rules.minLength !== null && input.length < this.rules.minLength) {
      return false;
    }

    if (this.rules.maxLength !== null && input.length > this.rules.maxLength) {
      return false;
    }

    return true;
  }
}

const validation = new ValidationString().required().min(5).max(12);

console.log(validation.isValid("hello")); //true
console.log(validation.isValid("hellowold")); //ture
console.log(validation.isValid("")); //false
console.log(validation.isValid("hellowoldasaaefafeafaeefafefa")); //false
