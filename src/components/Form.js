import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Person, Email, Lock } from '@material-ui/icons';
import { withFormik } from 'formik';
import Yup from 'yup';
import Input from './Input';
import PrivacyPolicy from './PrivacyPolicy';

class InnerForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showPassword: false,
    };
  }

  handleClick = (showPassword) => {
    this.setState({
      showPassword: !showPassword,
    });
  }

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;
    const { showPassword } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <Input
          title="vorname"
          icon={<Person />}
          handleClick={this.handleClick}
          showPassword={showPassword}
          hasCheckbox={false}
          id="firstName"
          placeholder=""
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.firstName && touched.firstName ? 'text-input error' : 'text-input'}
          errors={errors}
          touched={touched}
        />
        <Input
          title="nachname"
          icon={<Person />}
          handleClick={this.handleClick}
          showPassword={showPassword}
          hasCheckbox={false}
          id="lastName"
          placeholder=""
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.lastName && touched.lastName ? 'text-input error' : 'text-input'}
          errors={errors}
          touched={touched}
        />
        <Input
          title="mitgliedsname"
          icon={<Person />}
          handleClick={this.handleClick}
          showPassword={showPassword}
          hasCheckbox={false}
          id="userName"
          placeholder="Dein mitgliedsname ist öffentlich"
          type="text"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.userName && touched.userName ? 'text-input error' : 'text-input'}
          errors={errors}
          touched={touched}
        />
        <Input
          title="email"
          icon={<Email />}
          handleClick={this.handleClick}
          showPassword={showPassword}
          hasCheckbox={false}
          id="email"
          placeholder=""
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? 'text-input error' : 'text-input'}
          errors={errors}
          touched={touched}
        />
        <Input
          title="passwort"
          icon={<Lock />}
          handleClick={this.handleClick}
          showPassword={showPassword}
          hasCheckbox
          id="password"
          placeholder=""
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? 'text-input error' : 'text-input'}
          errors={errors}
          touched={touched}
        />
        <PrivacyPolicy
          id="privacyPolicy"
          type="checkbox"
          value={values.privacyPolicy}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.privacyPolicy && touched.privacyPolicy ? 'text-input error' : 'text-input'}
          errors={errors}
          touched={touched}
        />
        <button
          className="submit-button"
          type="submit"
          disabled={isSubmitting}
        >
          Jetzt registrieren
        </button>
      </form>
    );
  }
}

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    privacyPolicy: false,
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required!'),
    lastName: Yup.string()
      .required('Last name is required!'),
    userName: Yup.string()
      .required('User name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .required('Password is required!'),
    privacyPolicy: Yup.boolean()
      .oneOf([true], 'Must accept privacy policy'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'Form',
})(InnerForm);

const Form = () => (
  <div>
    <EnhancedForm />
  </div>
);

InnerForm.defaultProps = {
  errors: {},
  touched: {},
};

InnerForm.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
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
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    privacyPolicy: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Form;
