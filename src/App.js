import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Router
import AppRouter from './router/router';

// Global styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* main wrapper */}
        <main className="main">

          <AppRouter />

        </main>
        {/* \ main wrapper */}

      </div>
    );
  }
}

export default App;
