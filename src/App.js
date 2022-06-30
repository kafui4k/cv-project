import React, { Component } from 'react';
import Header from './components/header/header.component';
import Homepage from './components/pages/Homepage';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Homepage />
      </main>
    );
  }
}

export default App;
