import React, { useState } from 'react';
import Form from './components/Form';
import PreviewForm from './components/PreviewForm';

function App() {
  const [generateResume, setGenerateResume] = useState(false);

  const handleGenerateResumeClick = (event) => {
    event.preventDefault();

    setGenerateResume(false);
  };

  return (
    <main className="App">
      <Form handleFormSubmit={handleGenerateResumeClick} />
      <PreviewForm generateResume={generateResume} />
    </main>
  );
}

export default App;
