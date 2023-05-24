class RestApiError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends RestApiError {
  constructor(message) {
    super(message);
    this.status = 400;
    this.type = "Bad Request";
  }
}

class WrongParametersError extends RestApiError {
  constructor(message) {
    super(message);
    this.status = 404;
    this.type = "Failure";
  }
}


module.exports = {
  RestApiError,
  WrongParametersError,
  ValidationError,
};
