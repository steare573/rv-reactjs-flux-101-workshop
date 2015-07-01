var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/orderConstants');
var assign = require('object-assign');
var _ = require('lodash');
var debug = require('debug')('demo.stores.orderListStore');

/**
 * List of order to select from. In our example, let's think of these as db records (or master data records)
 *
 * @type [{orderId: Int, firstName: String, lastName: String}]
 */
var orderList = [];

/**
 * Private Setter for our entire order list
 *
 * @type [{orderId: Int, firstName: String, lastName: String}]
 */
function setOrderList (list) {
  orderList = list;
}

/**
 * Reset our order list to an empty array
 */
function resetOrderList () {
  orderList = [];
}

/**
 * Add an order to the end of our list
 *
 * @param {orderId: int, firstName: String, lastName: string} order
 */
function addOrder (order) {
  orderList.push(order);
}

/**
 * Upsert our order (i.e. insert if it doesn't exist, or update if it does
 *
 * @param  {orderId: int, firstName: string, lastName: string} order
 */
function upsertOrder (order) {
  debug('upserting order', order);
  order = order || {};
  var orderFound;
  if (orderList.length) {
    for (var i = 0; i < orderList.length; i++) {
      if (orderList[i].orderId == order.orderId) {
        debug('found my order', orderList);
        orderList[i] = _.cloneDeep(order);
        orderFound = true;
        break;
      }
    }

  }

  if (!orderFound) {
    orderList.push(_.cloneDeep(order));
  }
}

/**
 * Our main orderlist store for getting data from our order list and attaching change handlers
 *
 * NOTE: extends event emitter for allowing us to notify observers of changes
 */
var OrderListStore = assign({}, EventEmitter.prototype, {

  /**
   * Let others know that the order list has changed
   *
   * @return {[type]} [description]
   */
  emitChange: function () {
    this.emit(Constants.ORDER_LIST_CHANGE);
  },

  /**
   * Add a handler function to be fired when notified of an orderList change
   *
   * @param function changeHandler - no params
   */
  addChangeListener: function (changeHandler) {
    this.on(Constants.ORDER_LIST_CHANGE, changeHandler);
  },

  /**
   * Remove a change handler from listening to order list changes
   *
   * @param function changeHandler - no params
   */
  removeChangeListener: function (changeHandler) {
    this.removeListener(Constants.ORDER_LIST_CHANGE, changeHandler);
  },

  /**
   * Get our order list variable
   *
   * @return array orderList
   */
  getOrderList: function () {
    return orderList;
  },

  /**
   * Retrieve a single order by orderId from our list
   *
   * @param  Number orderId
   *
   * @return {}
   */
  getOrderFromList: function (orderId) {
    if (orderList.length) {
      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].orderId == orderId) {
          return orderList[i];
        }
      }
    }

    return {};
  },

  /**
   * Handle any actions dispatched here from our actions via the app dispatcher
   *
   * @param  {action: {actionType: KEY...}}
   *
   * @return true
   */
  dispatcherIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;
    debug('action type', action.actionType);
    switch (action.actionType) {
      // set our order list to the value stored in action.orderList
      case Constants.ORDER_LIST_SET:
        if (action.orderList) {
          setOrderList(action.orderList);
          OrderListStore.emitChange();
        }
        break;
      // reset our order list to an empty array
      case Constants.ORDER_LIST_RESET:
        resetOrderList();
        OrderListStore.emitChange();
        break;
      // add an order to the end of our list
      case Constants.ORDER_LIST_ADD_ORDER:
        addOrder(action.order);
        OrderListStore.emitChange();
        break;
      // upsert an order in our list
      case Constants.ORDER_LIST_REPLACE_ORDER:
        if (action.order) {
          upsertOrder(action.order);
          OrderListStore.emitChange();
        }
        break;
    }

    return true;
  })
});

module.exports = OrderListStore;
