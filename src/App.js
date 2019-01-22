import React, { Component } from 'react';

// Router
import Router from './router/router';

// Global styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* main wrapper */}
        <main className="main">

          <Router />

        </main>
        {/* \ main wrapper */}

      </div>
    );
  }
}

export default App;
