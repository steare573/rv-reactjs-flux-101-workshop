var AppDispatcher = require('../dispatcher');
var Constants = require('../constants/orderConstants');

/**
 * Actions to be taken on our list of orders
 *
 * @type {Object}
 */
module.exports = {

  /**
   * Set our order list
   *
   * @param [{orderObj}] orderList
   */
  setOrderList: function (orderList) {
    AppDispatcher.handleAction({
      actionType: Constants.ORDER_LIST_SET,
      orderList: orderList
    });
  },

  /**
   * Reset our order list to an empty array
   */
  resetOrderList: function () {
    AppDispatcher.handleAction({
      actionType: Constants.ORDER_LIST_RESET
    });
  },

  /**
   * Add an order to our list
   *
   * @param {orderId: int, firstName: String, lastName: string} order
   */
  addOrderToList: function (order) {
    AppDispatcher.handleAction({
      actionType: Constants.ORDER_LIST_ADD_ORDER,
      order: order
    });
  },

  /**
   * Replace an order in our list with the order passed in
   *
   * @param {orderId: int, firstName: String, lastName: string} order
   */
  replaceOrderInList: function (order) {
    AppDispatcher.handleAction({
      actionType: Constants.ORDER_LIST_REPLACE_ORDER,
      order: order
    });
  }
};
