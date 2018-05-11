import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PrivacyPolicy extends Component {
  render() {
    const {
      id,
      placeholder,
      type,
      value,
      onChange,
      onBlur,
      className,
      errors,
      touched,
    } = this.props;
    return (
      <div className="privacy-policy-container">
        <div className="checkbox-and-terms-container">
          <div className="checkbox-container">
            <input type="checkbox"
              id={id}
              placeholder={placeholder}
              type={type}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={className}
            />
          </div>
          <p>Ich Willige in die Verarbeitung und Nutzung meiner Daten gema der Dateschutzerklarung ein.</p>
        </div>
        <div className="error-container">
          {errors[id] &&
            touched[id] &&
              <div className="error-bubble">
                <p>{errors[id]}</p>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
