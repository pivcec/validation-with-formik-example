import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  getType = (type, showPassword) => {
    if (type === 'password' && showPassword === true) {
      return 'text';
    }
    if (type === 'password' && showPassword !== true) {
      return 'password';
    }
    return type;
  }

  render() {
    const {
      title,
      icon,
      hasCheckbox,
      handleClick,
      showPassword,
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
      <React.Fragment>
        <label className="input-title">
          <p>{title}</p>
        </label>
        <div className="input-container">
          <div className="input-icon">
            {icon}
          </div>
          <input
            id={id}
            placeholder={placeholder}
            type={this.getType(type, showPassword)}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={className}
          />
          {hasCheckbox &&
            <div className="input-with-checkbox">
              <input
                type="checkbox"
                onClick={() => handleClick(showPassword)}
              />
              <p>Anzeigen</p>
            </div>
          }
        </div>
        <div className="error-container">
          {errors[id] &&
            touched[id] &&
              <div className="error-bubble">
                <p>{errors[id]}</p>
              </div>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
