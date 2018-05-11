import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputWithCheckBox extends Component {
  render() {
    const { title, icon, handleChange } = this.props;
    return (
      <React.Fragment>
        <h2 className="input-title">
          {title}
        </h2>
        <div className="input-container">
          <div className="input-icon">
            {icon}
          </div>
          <input className="password"
            onChange={e => handleChange(e, title)}
          />
          <div className="input-with-checkbox">
            <input type="checkbox" />
            <p>Anzeigen</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InputWithCheckBox;
