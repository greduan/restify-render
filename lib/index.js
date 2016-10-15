'use strict';

const path = require('path');
const consolidate = require('consolidate');

const renderFactory = function (options, res, next) {
  return function restifyViewsRender (view, state) {
    consolidate[options.engine](path.join(options.dir, view), state, function (err, html) {
      if (err) { return next(err); }
      res.status(200);
      res.send(html);
    });
  };
};

const middlewareFactory = function (options) {
  return function restifyViewsMiddleware (req, res, next) {
    res.render = renderFactory(options, res, next);
    next();
  };
};

module.exports = middlewareFactory;
