'use strict';

const render = function (req, res, next) {
  return function (path, state) {
  };
};

module.exports = function (req, res, next) {
  res.render = render(req, res, next);
  next();
};
