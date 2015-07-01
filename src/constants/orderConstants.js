var keyMirror = require('react/lib/keyMirror');

/**
 * Object containing constants for working with our actions and stores
 *
 * @type {key: 'key'}
 */
module.exports = keyMirror({
  ACTIVE_ORDER_CHANGE: null,
  ORDER_LIST_CHANGE: null,
  ORDER_LIST_SET: null,
  ORDER_LIST_RESET: null,
  ORDER_LIST_REPLACE_ORDER: null,
  ORDER_LIST_ADD_ORDER: null,
  ACTIVE_ORDER_SET: null,
  ACTIVE_ORDER_RESET: null,
});