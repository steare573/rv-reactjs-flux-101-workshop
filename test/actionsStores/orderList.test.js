/**
 * Unit tests for orderListActions and orderListStores
 *
 * NOTE: These are more for the demo purposes. Edge cases have not been tested
 * thoroughly
 *
 * @author  Sean Teare <steare573@gmail.com>
 * @since  2015-07-01
 */
describe('Order List Stores and Actions', function () {
  var OrderListActions = require('../../src/actions/orderListActions');
  var OrderListStore = require('../../src/stores/orderListStore');
  var testData;
  beforeEach(function () {
    OrderListActions.resetOrderList();
    testData = [
      {
        orderId: 1,
        firstName: 'FirstFirst',
        lastName: 'FirstLast'
      },
      {
        orderId: 2,
        firstName: 'SecondFirst',
        lastName: 'SecondLast'
      }
    ];
  });
  describe('actions', function () {

    beforeEach(function () {
      OrderListActions.resetOrderList();
      testData = [
        {
          orderId: 1,
          firstName: 'FirstFirst',
          lastName: 'FirstLast'
        },
        {
          orderId: 2,
          firstName: 'SecondFirst',
          lastName: 'SecondLast'
        }
      ];
    });

    it('sets order list and alerts to change', function (done) {
      var listener = function () {
        var list = OrderListStore.getOrderList();
        list.should.be.instanceOf(Array);
        list.length.should.equal(2);
        list[0].should.be.instanceOf(Object);
        list[0].orderId.should.equal(1);
        list[0].firstName.should.equal('FirstFirst');
        list[0].lastName.should.equal('FirstLast');
        list[1].should.be.instanceOf(Object);
        list[1].orderId.should.equal(2);
        list[1].firstName.should.equal('SecondFirst');
        list[1].lastName.should.equal('SecondLast');
        OrderListStore.removeChangeListener(listener);
        done();
      }
      OrderListStore.addChangeListener(listener);
      OrderListActions.setOrderList(testData);

    });

    it('resets order list and alerts change', function (done) {
      var listener = function () {
        var list = OrderListStore.getOrderList();
        list.should.be.instanceOf(Array);
        list.length.should.equal(0);
        OrderListStore.removeChangeListener(listener);
        done();
      }

      OrderListActions.setOrderList(testData);
      OrderListStore.addChangeListener(listener);
      OrderListActions.resetOrderList();
    });

    it('adds order to list and alerts change', function (done) {
      var listener = function () {
        var list = OrderListStore.getOrderList();
        list.should.be.instanceOf(Array);
        list.length.should.equal(1);
        list[0].should.be.instanceOf(Object);
        list[0].orderId.should.equal(1);
        list[0].firstName.should.equal('FirstFirst');
        list[0].lastName.should.equal('FirstLast');
        OrderListStore.removeChangeListener(listener);
        done();
      }
      OrderListStore.addChangeListener(listener);
      OrderListActions.addOrderToList(testData[0]);
    });

    it('replaces order in list', function (done) {
      var listener = function () {
        var list = OrderListStore.getOrderList();
        list.should.be.instanceOf(Array);
        list.length.should.equal(2);
        list[0].should.be.instanceOf(Object);
        list[0].orderId.should.equal(1);
        list[0].firstName.should.equal('FirstHasChanged');
        list[0].lastName.should.equal('LastHasChanged');
        list[1].should.be.instanceOf(Object);
        list[1].orderId.should.equal(2);
        list[1].firstName.should.equal('SecondFirst');
        list[1].lastName.should.equal('SecondLast');
        OrderListStore.removeChangeListener(listener);
        done();
      }
      OrderListActions.setOrderList(testData);
      OrderListStore.addChangeListener(listener);
      OrderListActions.replaceOrderInList({
        orderId: 1,
        firstName: 'FirstHasChanged',
        lastName: 'LastHasChanged'
      })
    });
  });

  describe('stores', function () {
    // all of my store event handler and event notifications were tested above, so not going
    // to do it again
    it('gets order from list', function () {
      OrderListActions.setOrderList(testData);
      var order = OrderListStore.getOrderFromList(2);
      order.should.be.instanceOf(Object);
      order.orderId.should.equal(2);
    });

    it('returns empty object if get order from list does not exist', function () {
      OrderListActions.setOrderList(testData);
      var order = OrderListStore.getOrderFromList(3);
      order.should.be.instanceOf(Object);
      Object.keys(order).length.should.equal(0);
    });
  });
});