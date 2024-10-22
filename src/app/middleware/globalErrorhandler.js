import Apperror from "../error/Apperror.js";

const globalErrorhandler = async (err, req, res, next) => {
  let message = "something went wrong";
  let statusCode = 500;
  let success = false;

  if (err instanceof Apperror) {
    console.log(err);
    message = err.message;
    statusCode = err.status;
  } else if (err instanceof Error) {
    message = err.message;
  }
  res.status(statusCode).json({
    message: message,
    success: success,
  });

  next();
};

export default globalErrorhandler;
