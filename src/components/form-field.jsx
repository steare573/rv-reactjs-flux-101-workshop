var React = require('react');

/**
 * Form field component for building key val display as divs or text inputs
 *
 * Look at this as a way to reuse a component from multiple places to consolidate display logic
 *
 * @author  Sean Teare
 * @since  2015-07-01
 */
var FormField = React.createClass({

  /**
   * When our text changes, call the changeHandler passed in as a prop
   *
   * @param  Event e
   */
  handleChange: function (e) {
    var cb = this.props.changeHandler || function () {};
    var field = e.target.name;
    var val = e.target.value;
    cb(field, val);

  },

  /**
   * Render our component
   *
   * @return JSX
   * @throws {Error} If this.props.meta.type is not equal to text or display
   */
  render: function () {
    var meta = this.props.meta || {};
    var disabled = false;
    if (meta.disabled === true) {
      disabled = true;
    }
    // if meta.type set to text, render input boxes
    if (meta.type === 'text') {
      return (
        <div style={{width: '100%'}}>
          <label style={{width: '100', display: 'inline-block', color: '#002B7A'}} htmlFor={this.props.name}>{this.props.name}</label>
          <input style={{display: 'inline-block'}} type="text" disabled={disabled} value={this.props.value} name={this.props.name} onChange={this.handleChange} />
        </div>
      );
    } else if (meta.type === 'display') {
      // if meta.type is set to text, display a label and
      return (
        <div>
          <label style={{width: '100', display: 'inline-block', color: '#002B7A'}} htmlFor={this.props.name}>{this.props.name}</label>
          <span style={{display: 'inline-block'}} name={this.props.name}>{this.props.value}</span>
        </div>
      );
    }

    throw new Error('Invalid type ' + meta.type + ' provided for form field component');
  }

});

module.exports = FormField;
