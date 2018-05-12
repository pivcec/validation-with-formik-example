import React from 'react';
import Form from './Form';

const App = () => (
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
      <Form />
    </div>
    <div className="footer-container">
    </div>
  </div>
);

export default App;
