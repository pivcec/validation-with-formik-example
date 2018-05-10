import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      vorname: '',
      nachname: '',
      mitgliedsname: '',
      email: '',
      passwort: '',
    };
  }

  render() {
    return (
      <div className="container">
        <div className="button-container">
          <button className="facebook-button">Facebook</button>
        </div>
        <div className="headline">
          <h2 class="background">
            <span>
              oder ohne facebook
            </span>
          </h2>
        </div>
        <div className="form-container">
          <div className="input-container">
            <input />
          </div>
          <div className="input-container">
            <input />
          </div>
          <div className="input-container">
            <input />
          </div>
          <div className="input-container">
            <input />
          </div>
          <div className="input-container">
            <input />
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
};

export default Form;
