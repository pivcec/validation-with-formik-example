import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputWithCheckBox from './InputWithCheckBox';
import { Person, Email, Lock } from '@material-ui/icons';

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

  handleChange = (e, title) => {
    const { value } = e.target;
    this.setState({
      [title]: value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="facebook-button-container">
          <button className="facebook-button">
            Facebook
          </button>
        </div>
        <div className="headline">
          <h1 className="background">
            <span>
              oder ohne facebook
            </span>
          </h1>
        </div>
        <div className="form-container">
          <Input
            title={'vorname'}
            icon={<Person />}
            handleChange={this.handleChange}
          />
          <Input
            title={'nachname'}
            icon={<Person />}
            handleChange={this.handleChange}
          />
          <Input
            title={'mitgliedsname'}
            icon={<Person />}
            handleChange={this.handleChange}
          />
          <Input
            title={'email'}
            icon={<Email />}
            handleChange={this.handleChange}
          />
          <InputWithCheckBox
            title={'passwort'}
            icon={<Lock />}
            handleChange={this.handleChange}
          />
          <div className="privacy-policy-container">
            <div className="checkbox-container">
              <input type="checkbox" />
            </div>
            <p>Ich Willige in die Verarbeitung und Nutzung meiner Daten gema der Dateschutzerklarung ein.</p>
          </div>
          <button className="submit-button">Jetzt registrieren</button>
        </div>
        <div className="footer-container">
          <p>Bereits Mitglied bei Dawanda? <a href="">Hier einloggen</a></p>
        </div>
      </div>
    );
  }
}

export default Form;
