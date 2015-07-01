var React = require('react');
var OrderForm = require('./order-form');
var OrderDetail = require('./order-detail');
var OrderList = require('./order-list');
var OrderListStore = require('../stores/orderListStore');
var ActiveOrderStore = require('../stores/activeOrderStore');
var debug = require('debug')('demo.components.main');
/**
 * Private function for generating our current state object
 *
 * @return {} - to set as state
 */
function generateState () {
  return {
    orderList: OrderListStore.getOrderList(),
    activeOrder: ActiveOrderStore.getActiveOrder()
  };
}

/**
 * Our main application container component
 *
 * NOTE: This should allow you to see how state works, and how listening to
 * store change events work
 *
 * This is where your data changes are actually handled, it then trickles the
 * current data down to other components through props
 *
 * @author  Sean Teare
 * @since  2015-07-01
 */
var MainApp = React.createClass({

  /**
   * Get our initial state object
   *
   * @lifecycleMethod
   */
  getInitialState: function () {
    debug('getting initial state');
    return generateState();
  },

  /**
   * Attach our change listeners when the component mounts
   *
   * @lifecycleMethod
   */
  componentDidMount: function () {
    debug('component mounted');
    ActiveOrderStore.addChangeListener(this.onActiveOrderChange);
    OrderListStore.addChangeListener(this.onOrderListChange);
  },

  /**
   * Detach our change listeners when the component mounts
   *
   * @lifecycleMethod
   */
  componentWillUnmount: function () {
    debug('component unmounting');
    ActiveOrderStore.removeChangeListener(this.onActiveOrderChange);
    OrderListStore.removeChangeListener(this.onOrderListChange);
  },

  /**
   * Change handler for active order changes
   */
  onActiveOrderChange: function () {
    debug('active order changed');
    this.setState(generateState());
  },

  /**
   * Change handler for order list changes
   */
  onOrderListChange: function () {
    debug('order list changed')
    this.setState(generateState());
  },

  /**
   * Render method for our main component
   *
   * @return JSX
   */
  render: function () {
    return (
      <div>
        <div className='appHeader' style={{width:'100%', padding: '10', margin:'0', height: '50px', backgroundColor: '#0072ff', color: '#e8ebee', fontSize: '30'}}>
          React Demo Main App
        </div>
        <div style={{width:'100%', backgroundColor: '#e8ebee', height: '100%'}}>
          <div style={{float: 'left', width: '33%', height: '100%'}} >
            <OrderList orderList={this.state.orderList} />
          </div>
          <div style={{float: 'left', width: '33%', height: '100%', backgroundColor: '#aab7c4'}} >
            <OrderForm order={this.state.activeOrder} />
          </div>
          <div style={{float: 'left', width: '34%', height: '100%'}} >
            <OrderDetail order={this.state.activeOrder} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MainApp;
