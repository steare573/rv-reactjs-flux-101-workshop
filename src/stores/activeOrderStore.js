var AppDispatcher = require('../dispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/orderConstants');

/**
 * Our private active order object
 *
 * @type {Object}|{orderId: Int, firstName: String, lastName: String}
 */
var activeOrder = {};

/**
 * Set our active order
 *
 * @param {orderId: Int, firstName: String, lastName: String}
 */
function setActiveOrder (order) {
  activeOrder = order;
}

/**
 * Reset our active order to an empty object
 */
function resetActiveOrder () {
  activeOrder = {};
}

/**
 * Store module for getting data and attaching change listeners related to active order
 *
 * Extends the event emitter for handling change events
 */
var ActiveOrderStore = assign({}, EventEmitter.prototype, {

  /**
   * Tell everyone that our active order has changed
   */
  emitChange: function () {
    this.emit(Constants.ACTIVE_ORDER_CHANGE);
  },

  /**
   * Add a handler to be fired when our active order changes
   *
   * @param function - no params
   */
  addChangeListener: function (changeHandler) {
    this.on(Constants.ACTIVE_ORDER_CHANGE, changeHandler);
  },

  /**
   * Remove a handler from being notified of active order changes
   */
  removeChangeListener: function (changeHandler) {
    this.removeListener(Constants.ACTIVE_ORDER_CHANGE, changeHandler);
  },

  /**
   * Getter for our active order
   *
   * @return {} - active order
   */
  getActiveOrder: function () {
    return activeOrder;
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

    switch (action.actionType) {
      case Constants.ACTIVE_ORDER_SET:
        setActiveOrder(action.order);
        ActiveOrderStore.emitChange();
        break;
      case Constants.ACTIVE_ORDER_RESET:
        resetActiveOrder();
        ActiveOrderStore.emitChange();
        break;
    }

    return true;
  })

});

module.exports = ActiveOrderStore;
