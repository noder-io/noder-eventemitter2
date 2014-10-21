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

var test          = require('unit.js');
var plugin        = require('../../src/index');
var EventEmitter2 = require('eventemitter2').EventEmitter2;


describe('noder-eventemitter2', function() {

  it('should be added in `noder` with `EventEmitterFactory`', function() {

    var noder = require('noder.io').createNoder();

    test
      .when('add the plugin', function() {

        test.object(noder.use(plugin))
          .isInstanceOf(noder.Noder);
      })

      .then('handle the plugin', function() {

        test
          .bool(noder.$di.has('EventEmitterFactory'))
            .isTrue()

          .object(noder)
            .notContains(new EventEmitter2(noder.$di.get('config').eventEmitter))

          .given('Load in noder', noder.$di.get('EventEmitterFactory'))

          .case('use the plugin', function() {

            var spy = test.spy();

            test.object(noder)
              .contains(new EventEmitter2(noder.$di.get('config').eventEmitter));

            noder.on('test', spy);
            noder.emit('test', 'a');

            test.assert(spy.calledOnce);
            test.assert(spy.calledWith('a'));
          })
        ;
      })
    ;
  });

  it('should be added in `$di` with `EventEmitterDiFactory`', function() {

    var noder = require('noder.io').createNoder();

    test
      .when('add the plugin', function() {

        test.object(noder.use(plugin))
          .isInstanceOf(noder.Noder);
      })

      .then('handle the plugin', function() {

        test
          .bool(noder.$di.has('EventEmitterDiFactory'))
            .isTrue()

          .object(noder.$di)
            .notContains(new EventEmitter2(noder.$di.get('config').eventEmitter))

          .given('Load in noder', noder.$di.get('EventEmitterDiFactory'))

          .case('use the plugin', function() {

            var spy = test.spy();

            test.object(noder.$di)
              .contains(new EventEmitter2(noder.$di.get('config').eventEmitter));

            noder.$di.on('test', spy);
            noder.$di.emit('test', 'a');

            test.assert(spy.calledOnce);
            test.assert(spy.calledWith('a'));
          })
        ;
      })
    ;
  });
});