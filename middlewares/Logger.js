const log = (req, res, next) => {
  console.log("auth middleware");

  next();
};

module.exports = log;

//log middleware is only intended to signup
