# koa-404-handler

[![build status](https://img.shields.io/travis/ladjs/koa-404-handler.svg)](https://travis-ci.org/ladjs/koa-404-handler)
[![code coverage](https://img.shields.io/codecov/c/github/ladjs/koa-404-handler.svg)](https://codecov.io/gh/ladjs/koa-404-handler)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ladjs/koa-404-handler.svg)](<>)

> 404 handler for [Lad][] and [Koa][] (best used with [koa-better-error-handler][])


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install koa-404-handler
```

[yarn][]:

```sh
yarn add koa-404-handler
```


## Usage

```js
const errorHandler = require('koa-better-error-handler');
const koa404Handler = require('koa-404-handler');

// ...

// override koa's undocumented error handler
app.context.onerror = errorHandler;

// ... routes go here ...

app.use(koa404Handler);

app.listen();
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[lad]: https://lad.js.org

[koa]: http://koajs.com

[koa-better-error-handler]: https://github.com/ladjs/koa-better-error-handler
