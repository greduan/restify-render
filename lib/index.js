'use strict';

const renderFactory = function (options, res, next) {
  return function restifyViewsRender (path, state) {
    cons[options.engine](path, state, function (err, html) {
      if (err) { return next(err); }

      res.status(200);
      res.send(html);
    });
  };
};

const main = function (options) {
  return function restifyViewsMiddleware (req, res, next) {
    res.render = renderFactory(options, res, next);
    next();
  };
};

module.exports = main;
