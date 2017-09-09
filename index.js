/* eslint-env node */
'use strict';

module.exports = {
  name: 'threadsjs',
  included: function included(app){
    this._super.included(app);
    app.import(app.bowerDirectory + '/threads/dist/threads.browser.min.js');
    app.import('vendor/threads.js', {
      exports: {
        Threads: ['default']
      }
    });
  }
};