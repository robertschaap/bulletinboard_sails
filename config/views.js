module.exports.views = {

  getRenderFn: function() {
    const cons = require('consolidate');
    return cons.pug;
  },
  extension: 'pug',
  layout: 'layouts/layout'

};
