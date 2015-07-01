var React = require('react');
var FormField = require('../form-field');
var ActiveOrderActions = require('../../actions/activeOrderActions');
var OrderListActions = require('../../actions/orderListActions');
var debug = require('debug')('demo.components.order-form');

/**
 * Order form module for displaying a form for editing order passed in this.props.order
 *
 * @author  Sean Teare <steare573@gmail.com>
 * @since  2015-07-01
 */
var OrderForm = module.exports = React.createClass({

  /**
   * Save an updated order in our order list
   */
  saveOrder: function () {
    debug('updating order in list');
    OrderListActions.replaceOrderInList(this.props.order);
  },

  /**
   * Clear our active order out
   */
  clearOrder: function () {
    ActiveOrderActions.resetActiveOrder();
  },

  /**
   * Change handler generator for our form fields to update the active order as they type\
   *
   * @param  {[type]} orderId
   *
   * @return function (key, val) - to alter on active order
   */
  onChangeFunction: function (orderId) {
    var order = this.props.order;
    return function (key, val) {
      var curOrder = order || {};
      if (orderId == curOrder.orderId) {
        curOrder[key] = val;
        ActiveOrderActions.setActiveOrder(curOrder);
      }
    };
  },

  /**
   * Render method for our component
   *
   * @return JSX
   */
  render: function() {
    var fields = [];
    var meta;
    if (this.props.order.orderId) {
      Object.keys(this.props.order).forEach(function (propName) {
        meta = (propName == 'orderId') ? {type: 'text', disabled: true} : {type: 'text'};
        fields.push(
          <li style={{padding: '.5em'}}><FormField meta={meta} name={propName} value={this.props.order[propName]} key={'order-detail-' + this.props.orderId + '-' + propName} changeHandler={this.onChangeFunction(this.props.order.orderId)}/></li>
        );
      }.bind(this));

      return (
        <div style={{padding: '.5em'}}>
          <div style={{color:'#0072ff', fontSize: '1.5em'}}>Order Form Component</div>
          <ul style={{listStyleType: 'none'}}>
            {fields}
          </ul>
          <div style={{width: '100%', padding: '1em', margin: '1em'}}>
            <button style={{outline: 'none', color: '#ffffff', backgroundColor: '#0072ff', height: '40px', borderRadius: '8px', padding: '1em', border: 'none', textTransform: 'uppercase', display: 'inline-block', margin: '1em'}} onClick={this.saveOrder}>Update</button>
            <button style={{outline: 'none', color: '#ffffff', backgroundColor: '#0072ff', height: '40px', borderRadius: '8px', padding: '1em', border: 'none', textTransform: 'uppercase', display: 'inline-block', margin: '1em'}} onClick={this.clearOrder}>Clear Active Order</button>
          </div>
        </div>
      );
    }

    return (
      <div style={{padding: '.5em'}}>
        <div style={{color:'#0072ff', fontSize: '1.5em'}}>Order Form Component</div>
        <div>No Active Order</div>
      </div>
    );
  }
});

module.exports = OrderForm;
