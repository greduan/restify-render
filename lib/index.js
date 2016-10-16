'use strict';

const path = require('path');

const renderFactory = function (options, res, next) {
  const callback = function (err, html) {
    if (err) { return next(err); }

    res.status(200);
    res.set('Content-Type', 'text/html');
    res.send(html);
  };

  return function restifyRenderRender (view, state, userCallback) {
    options.engine(path.join(options.dir, view), state, userCallback || callback);
  };
};

const middlewareFactory = function (options) {
  return function restifyRenderMiddleware (req, res, next) {
    res.render = renderFactory(options, res, next);
    next();
  };
};

module.exports = middlewareFactory;
