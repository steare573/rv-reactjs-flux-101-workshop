/**
 * Our main application and entrypoint for our webpack build
 *
 * Watch here to see how we can use actions outside of a component to trigger changes
 * that are recognized inside our components
 *
 * @author  Sean Teare <steare573@gmail.com>
 * @since  2015-07-01
 */
// if we are in the browser, lets leak our debug module for easy console logging
if (window) {
  window.demoDebug = require('debug');
}
var React = require('react');
var Application = require('./components/main.jsx');
var OrderListActions = require('./actions/orderListActions.js');

var firstNames = ['Jerry', 'Bob', 'Billy', 'Mickey', 'Trey', 'Mike', 'Jon', 'Paige'];
var lastNames = ['Garcia', 'Weir', 'Kreutzman', 'Hart', 'Anastasio', 'Gordon', 'Fishman', 'McConnell']
var counter = 1;

// Lets add 10 orders, 1 every second to demo using actions outside of components
var timer = setInterval(function () {
  var order = {
    orderId: counter,
    firstName: firstNames[Math.floor(Math.random() * (firstNames.length - 1))],
    lastName: lastNames[Math.floor(Math.random() * (lastNames.length - 1))]
  };
  OrderListActions.addOrderToList(order);
  counter++;
  if (counter > 10) {
    clearInterval(timer);
  }
}, 1000);

// Render our application in the div with id mainApp
React.render(<Application />, document.getElementById('mainApp'));
