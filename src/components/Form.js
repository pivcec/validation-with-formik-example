import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <div className="form-container">
        <button>Facebook</button>
      </div>
    );
  }
}

Form.propTypes = {
};

export default Form;
