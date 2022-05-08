import { Component } from 'react';
import Educational from './components/Educational';
import Personal from './components/Personal';
import Practical from './components/Practical';

class App extends Component {
  render() {
    return (
      <main className="App">
        <section className='content'>
          <h1>Resume.ly</h1>
          <Personal />
          <Educational />
          <Practical />
        </section>
        <section className='content___preview'>
          <h1>Preview COntent here</h1>
        </section>
      </main>
    );
  }
}

export default App;
