/* eslint-env node */
module.exports = {
  description: 'Threads js parallel workers',
  normalizeEntityName: function() {

  },
  afterInstall: function (options) {
    return this.addBowerPackageToProject('threads');
    // body...
  }
  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
