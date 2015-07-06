/**
 * Unit tests for activeOrderActions and activeOrderStore
 *
 * NOTE: These are more for the demo purposes. Edge cases have not been tested
 * thoroughly
 *
 * @author  Sean Teare <steare573@gmail.com>
 * @since  2015-07-01
 */
describe('Active Order Stores and Actions', function () {
  var Actions = require('../../src/actions/activeOrderActions');
  var Store = require('../../src/stores/activeOrderStore');
  var testOrder;
  beforeEach(function () {
    Actions.resetActiveOrder();
    testOrder = {
      orderId: 123,
      firstName: 'Les',
      lastName: 'Claypool'
    }
  })
  describe('actions', function () {
    it('sets active order', function (done) {
      var listener = function () {
        var order = Store.getActiveOrder();
        order.should.be.instanceOf(Object);
        order.orderId.should.equal(testOrder.orderId);
        order.firstName.should.equal(testOrder.firstName);
        order.lastName.should.equal(testOrder.lastName);
        Store.removeChangeListener(listener);
        done();
      };
      Store.addChangeListener(listener);
      Actions.setActiveOrder(testOrder);

    });

    it('resets active order', function (done) {
      var listener = function () {
        var order = Store.getActiveOrder();
        order.should.be.instanceOf(Object);
        Object.keys(order).length.should.equal(0);
        Store.removeChangeListener(listener);
        done();
      };

      Actions.setActiveOrder(testOrder);
      Store.addChangeListener(listener);
      Actions.resetActiveOrder();
    });
  });
});