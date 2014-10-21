/**
 * This file is part of `noder-eventemitter2`.
 *
 * (c) Nicolas Tallefourtane <dev@nicolab.net>
 *
 * For the full copyright and license information, please view
 * the LICENSE file that was distributed with this source code
 * or visit https://github.com/noder-io/noder-eventemitter2.
 *
 * @author Nicolas Tallefourtane <dev@nicolab.net>
 */

'use strict';

var EventEmitter = require('eventemitter2').EventEmitter2;
var utils        = require('noder.io/src/utils');
var api;


/**
 * Init config
 */
function initConfig() {

  api.$di.merge({
    config: {
      eventEmitter: {

        // use wildcards.
        wildcard: true,

        // the delimiter used to segment namespaces, defaults to `.`.
        delimiter: '.',

        // if you want to emit the newListener event set to true.
        newListener: false,

        // max listeners that can be assigned to an event, default 10.
        maxListeners: 10
      }
    }
  });
}

/**
 * Init `noder-eventemitter2` plugin.
 * @param  {Noder} noder  `Noder` instance
 * @return {Noder}        Current `Noder` instance
 */
module.exports.__noder = function EventEmitter2Plugin(noder) {

  var ev;

  api = noder;
  initConfig();

  var getEv = function getEv() {

    if(!ev) {
      ev = new EventEmitter(api.$di.get('config').eventEmitter);
    }

    return ev;
  };

  // add in `noder` object
  api.$factory('EventEmitterFactory', function() {
    utils.merge(api, getEv());
  });

  // add in `noder.$di` object
  api.$factory('EventEmitterDiFactory', function() {
    utils.merge(api.$di, getEv());
  });

  return api;
};