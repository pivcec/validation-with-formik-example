import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
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
          <input
            onChange={e => handleChange(e, title)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
