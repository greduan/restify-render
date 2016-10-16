# restify-render

Proof of concept for having template rendering in
[Restify](http://restify.com), i.e. having interactive apps in Restify.

## Usage

For a full example you can take a look at `test/server.js`.

Otherwise, here's a quick start:

```js
const render = require('restify-render');
const cons = require('consolidate');

// assign res.render()
app.use(render({
  engine: cons.pug,
  dir: __dirname + '/views',
}));

// basic use of res.render()
server.get('/:name', function (req, res) {
  res.render('view.pug', { name: req.params.name || 'Jason' });
});
```

## License

```
Copyright (c) 2016 Eduardo Lavaque <me@greduan.com>
This work is free.  You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar.  See the LICENSE file for more details.
```
