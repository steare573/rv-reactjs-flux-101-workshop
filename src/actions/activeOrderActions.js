var AppDispatcher = require('../dispatcher');
var Constants = require('../constants/orderConstants');

/**
 * Actions to be taken on our active order
 *
 * @type {Object}
 */
module.exports = {
  /**
   * Set our active order to the param passed in
   *
   * @param {orderId: int, firstName: String, lastName, String} order
   */
  setActiveOrder: function (order) {
    AppDispatcher.handleAction({
      actionType: Constants.ACTIVE_ORDER_SET,
      order: order
    });
  },

  /**
   * Reset our active order
   */
  resetActiveOrder: function () {
    AppDispatcher.handleAction({
      actionType: Constants.ACTIVE_ORDER_RESET
    });
  }
};
