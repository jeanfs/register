import React, { Component } from 'react';

// Router
import Router from './router/router';

// Reactstrap components
import { Container } from 'reactstrap';

// Global styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* main wrapper */}
        <main className="main">

          {/* main container */}
          <Container>

            <Router />

          </Container>
          {/* \ main container */}

        </main>
        {/* \ main wrapper */}

      </div>
    );
  }
}

export default App;
