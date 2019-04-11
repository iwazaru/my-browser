import React, { Component } from 'react';
import UAParser from 'ua-parser-js';

import './App.css';

const parser = new UAParser(navigator.userAgent);
const browser = parser.getBrowser();
const os = parser.getOS();

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Your browser:
          <br />
          {browser.name} {browser.version}
        </p>
        <p>
          Your operating system:
          <br />
          {os.name} {os.version}
        </p>
      </div>
    );
  }
}

export default App;
