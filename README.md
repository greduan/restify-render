# restify-render

Just an experiment to see if I can implement view rendering for
[restify](http://restify.com/).

## Usage

```js
const restifyRender = require('restify-render');

// assign res.render()
app.use(restifyRender({
  engine: 'pug',
  dir: __dirname + '/views',
}));

// your middlewares here, any of them can now use res.render()
```

## License

```
Copyright (c) 2016 Eduardo Lavaque <me@greduan.com>
This work is free.  You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar.  See the LICENSE file for more details.
```
