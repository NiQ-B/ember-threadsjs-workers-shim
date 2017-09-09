// vendor/threads.js

(function() {
  /* globals define, threads */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('threads', { 'default': Threads });

})();