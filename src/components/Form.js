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
          <h1 className="background">
            <span>
              oder ohne facebook
            </span>
          </h1>
        </div>
        <div className="form-container">
          <h2 className="input-title">vorname</h2>
          <div className="input-container">
            <div className="input-icon"></div>
            <input />
          </div>
          <h2 className="input-title">nachname</h2>
          <div className="input-container">
            <div className="input-icon"></div>
            <input />
          </div>
          <h2 className="input-title">mitgliedsname</h2>
          <div className="input-container">
            <div className="input-icon"></div>
            <input />
          </div>
          <h2 className="input-title">email</h2>
          <div className="input-container">
            <div className="input-icon"></div>
            <input />
          </div>
          <h2 className="input-title">password</h2>
          <div className="input-container">
            <div className="input-icon"></div>
            <input />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
