# restify-render

Proof of concept for having template rendering in
[Restify](http://restify.com), i.e. having interactive apps in Restify.

## Usage

```js
const render = require('restify-render');

// assign res.render()
app.use(render({
  engine: 'pug',
  dir: __dirname + '/views',
}));

// basic use of res.render()
server.get('/', function (req, res) {
  res.render('view.pug', { name: 'Jason' });
});
```

## License

```
Copyright (c) 2016 Eduardo Lavaque <me@greduan.com>
This work is free.  You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar.  See the LICENSE file for more details.
```
