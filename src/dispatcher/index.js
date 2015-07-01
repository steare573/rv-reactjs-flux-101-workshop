'use strict';

var Dispatcher = require('flux').Dispatcher;

var Instance = new Dispatcher();
// if we need to append common data elements to every event,
// we can do so here.
Instance.handleAction = function (action) {
  this.dispatch({
    action: action
  });
};

module.exports = Instance;
