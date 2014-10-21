# noder-eventemitter2

[![Actual version published on NPM](https://badge.fury.io/js/noder-eventemitter2.png)](https://www.npmjs.org/package/noder-eventemitter2)

Plugin for [Noder.io](http://noder.io) that provides the module [eventemitter2](https://github.com/asyncly/EventEmitter2) in the API (`noder` object) and/or `$di` container.


## Install

```sh
npm install --save noder-eventemitter2
```


## Usage

```js
noder.use('noder-eventemitter2')
```

To add `eventemitter2` in your API
```js
noder.$di.get('EventEmitterFactory');

// now, your API is an event emitter
noder.emit('event')
```

To add `eventemitter2` in the `$di` container
```js
noder.$di.get('EventEmitterDiFactory');

// now, your $di container is an event emitter
noder.$di.emit('event')
```

See the doc of [eventemitter2](https://github.com/asyncly/EventEmitter2) :blue_book:


## Unit Tests

This plugin [is fully tested](https://github.com/noder-io/noder-eventemitter2/tree/master/test/src) with [Unit.js](http://unitjs.com) and Mocha.


## License

[MIT](https://github.com/noder-io/noder-eventemitter2/blob/master/LICENSE) (c) 2013, Nicolas Tallefourtane.


## Author

| [![Nicolas Tallefourtane - Nicolab.net](http://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](http://nicolab.net) |
|---|
| [Nicolas Talle](http://nicolab.net) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |

