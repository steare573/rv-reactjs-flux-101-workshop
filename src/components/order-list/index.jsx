var React = require('react');
var ActiveOrderActions = require('../../actions/activeOrderActions');
var OrderListStore = require('../../stores/orderListStore');
var _ = require('lodash');

/**
 * Component for displaying all of our order list with selectable buttons
 *
 * Watch this to see how the orders are updated as the orderList changes
 * by the orderList being passed down through the properties
 *
 * @author  Sean Teare <steare573@gmail.com>
 * @since  2015-07-01
 */
var OrderList = React.createClass({

  /**
   * Return onclick handler for making clicked upon order the active order
   *
   * @param NUMBER - orderId we want to set as active order
   */
  setActiveOrderFunction: function (orderId) {
    return function () {
      ActiveOrderActions.setActiveOrder(_.cloneDeep(OrderListStore.getOrderFromList(orderId)));
    }
  },

  /**
   * Render function for our component
   *
   * @return JSX
   */
  render: function() {
    // if we have an order in our list, run through each and create a line for selecting order
    if (this.props.orderList.length) {
      var orderLinks = [];
      this.props.orderList.forEach(function(curOrder) {
        orderLinks.push(
          <li style={{padding: '.5em'}} key={'order-list-list-item' + curOrder.orderId}>
            <button style={{outline: 'none', color: '#ffffff', backgroundColor: '#0072ff', borderRadius: '8px', padding: '.5em', border: 'none', textTransform: 'uppercase', display: 'inline-block', width: '50px'}} onClick={this.setActiveOrderFunction(curOrder.orderId)}>{curOrder.orderId}</button>
            <span style={{display: 'inline-block', padding: '10'}}>{curOrder.firstName}</span>
            <span style={{display: 'inline-block'}}>{curOrder.lastName}</span>
          </li>
        );
      }.bind(this));

      return (
        <div style={{padding: '.5em'}}>
          <div style={{color:'#0072ff', fontSize: '1.5em'}}>Order List Component</div>
          <ul style={{listStyleType: 'none'}}>
            {orderLinks}
          </ul>
        </div>
      );


    } else {
      // if we don't have any orders in the list, let our user know
      return (
        <div style={{padding: '.5em'}}>
          <div style={{color:'#0072ff', fontSize: '1.5em'}}>Order List Component</div>
          No Orders In List
        </div>
      );
    }

  }
});

module.exports = OrderList;
