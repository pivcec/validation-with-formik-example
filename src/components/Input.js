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
        <label
          htmlFor={id}
          className="input-title"
        >
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

Input.defaultProps = {
  errors: {},
  touched: {},
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  hasCheckbox: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    password: PropTypes.string,
    userName: PropTypes.string,
  }),
  touched: PropTypes.shape({
    privacyPolicy: PropTypes.bool,
  }),
};

export default Input;
