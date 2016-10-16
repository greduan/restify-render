'use strict';

const path = require('path');

const renderFactory = function (options, res, next) {
  return function restifyRenderRender (view, state) {
    options.engine(path.join(options.dir, view), state, function (err, html) {
      if (err) { return next(err); }
      res.status(200);
      res.send(html);
    });
  };
};

const middlewareFactory = function (options) {
  return function restifyRenderMiddleware (req, res, next) {
    res.render = renderFactory(options, res, next);
    next();
  };
};

module.exports = middlewareFactory;
