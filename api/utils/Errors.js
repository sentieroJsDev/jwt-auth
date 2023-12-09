class WebError {
  constructor(status, error) {
    this.status = status;
    this.error = error;
  }
}

export class Unprocessable extends WebError {
  constructor(error) {
    super(422, error);
  }
}

export class Conflict extends WebError {
  constructor(error) {
    super(409, error);
  }
}

export class NotFound extends WebError {
  constructor(error) {
    super(404, error);
  }
}

export class Forbidden extends WebError {
  constructor(error) {
    super(403, error);
  }
}

export class Unauthorized extends WebError {
  constructor(error) {
    super(401, error);
  }
}

export class BadRequest extends WebError {
  constructor(error) {
    super(400, error);
  }
}

class ErrorUtils {
  static catchError(res, error) {
    console.log(error);
    return res.status(error.status || 500).json(error);
  }
}

export default ErrorUtils;
