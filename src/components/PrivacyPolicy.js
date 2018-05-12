import React from 'react';
import PropTypes from 'prop-types';

const PrivacyPolicy = (props) => {
  const {
    id,
    type,
    value,
    onChange,
    onBlur,
    className,
    errors,
    touched,
  } = props;
  return (
    <div className="privacy-policy-container">
      <div className="checkbox-and-terms-container">
        <div className="checkbox-container">
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={className}
          />
        </div>
        <p>
          Ich Willige in die Verarbeitung und Nutzung meiner
          Daten gema der Dateschutzerklarung ein.
        </p>
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
};

PrivacyPolicy.defaultProps = {
  errors: {},
  touched: {},
};

PrivacyPolicy.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
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

export default PrivacyPolicy;
