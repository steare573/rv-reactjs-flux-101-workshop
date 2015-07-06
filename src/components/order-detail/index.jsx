var React = require('react');
var FormField = require('../form-field.jsx');

/**
 * Component for storing the details of the order passed in this.props.order
 *
 * Watch this to see how the data changes from the form are recognized in the main app
 * and trickled back through to here to keep the data in sync
 *
 * @author  Sean Teare <steare573@gmail.com>
 * @since  2015-07-01
 */
var OrderDetail = module.exports = React.createClass({

  /**
   * REnder function for our component
   *
   * @return JSX
   */
  render: function() {
    var fields = [];

    // if we have an orderid, lets run through the props and create a display only key val display
    if (this.props.order.orderId) {
      Object.keys(this.props.order).forEach(function (propName) {
        fields.push(
          <li style={{padding: '.5em'}} key={'order-detail-li-' + this.props.order.orderId + propName}><FormField meta={{type: 'display'}} name={propName} value={this.props.order[propName]} key={'order-detail-' + this.props.orderId + '-' + propName} /></li>
        );
      }.bind(this));

      return (
        <div className='order-detail' style={{padding: '.5em'}}>
          <div style={{color:'#0072ff', fontSize: '1.5em'}}>Order Detail Component</div>
          <ul style={{listStyleType: 'none'}}>
          {fields}
          </ul>
        </div>
      );
    }

    // if we don't have an order, return message telling us that
    return (
      <div className='order-detail' style={{padding: '.5em'}}>
        <div style={{color:'#0072ff', fontSize: '1.5em'}}>Order Detail Component</div>
        <div>No Active Order</div>
      </div>
    )

  }
});

module.exports = OrderDetail;
