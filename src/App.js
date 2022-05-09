import { Component } from 'react';
import Form from './components/Form';
import PreviewForm from './components/PreviewForm';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Form />
        <PreviewForm />
      </main>
    );
  }
}

export default App;
