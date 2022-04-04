const Joi = require("joi");

const BaseValidator = require('./base');

class ExampleValidator extends BaseValidator {
  validateExample(req) {
    const Schema = Joi.object({
      name: Joi.string()
        .optional()
    })
    
    return this.validateQuery(Schema, req)
  }
}

module.exports = new ExampleValidator();
