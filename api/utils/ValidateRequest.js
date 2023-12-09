import ErrorUtils, { Unprocessable } from "./Errors.js";

export default async (req, res, next, schema) => {
  try {
    if (schema) {
      await schema.validate(req);
    }

    return next();
  } catch ({ path, errors }) {
    return ErrorUtils.catchError(
      res,
      new Unprocessable(JSON.stringify({ path, errors }))
    );
  }
};
