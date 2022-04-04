const BaseHandler = require('./base');

const ExampleValidator = require('../validators/example')

const ExampleService = require('../services/example');

class ExampleHandler extends BaseHandler {
  handleExample(req, res) {
    const validateData = ExampleValidator.validateExample(req)
    
    return ExampleService.example(validateData.name)
      .then(data => {
        return super.successResponse(res, 'Success!', data)
      })
      .catch(err => {
        return super.badRequest(res, err.message)
      })
  }
}

module.exports = new ExampleHandler()
