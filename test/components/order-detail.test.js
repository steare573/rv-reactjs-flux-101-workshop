var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('../testdom')('<html><body></body></html>');
var testOrder = {
  orderId: 12,
  firstName: 'Cardale',
  lastName: 'Jones'
};
describe('Order Detail Component', function () {
  it('gets order props when passed down', function () {
     var OrderDetail = require('../../src/components/order-detail/index.jsx');
    var orderDetail = TestUtils.renderIntoDocument(
      <OrderDetail order={testOrder} />
    );
    var props = orderDetail.props;
    props.should.be.instanceOf(Object);
    props.should.have.property('order');
    props.order.should.be.instanceOf(Object);
    props.order.orderId.should.equal(12);
    props.order.firstName.should.equal('Cardale');
    props.order.lastName.should.equal('Jones');
  });

});