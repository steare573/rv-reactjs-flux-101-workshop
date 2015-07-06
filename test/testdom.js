/**
 * Allow dom mocking for component unit tests
 *
 * http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/
 *
 * Then, at the top of any test that needs a DOM, we put this snippet:
 * require('./testdom')('<html><body></body></html>');
 */
module.exports = function(markup) {
  if (typeof document !== 'undefined') return;
  var jsdom = require('jsdom').jsdom;
  global.document = jsdom(markup || '');
  global.window = document.parentWindow;
  global.navigator = {
    userAgent: 'node.js'
  };
};