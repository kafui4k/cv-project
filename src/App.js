import React, { useState } from 'react';
import Form from './components/Form';
import PreviewForm from './components/PreviewForm';

function App() {
  const [generateResume, setGenerateResume] = useState(false);

  const handleGenerateResumeClick = (event) => {
    event.preventDefault();
    // setState((prevState) => ({
    //   ...prevState.educationalExperiences,
    //   educationalExperiences: this.state.educationalExperience,
    //   ...prevState.workExperiences,
    //   workExperiences: this.state.workExperience
    // }));

    // setTimeout(() => {
    //   setGenerateResume(true);
    // }, 5000);

    setGenerateResume(true);
  };

  return (
    <main className="App">
      <Form handleFormSubmit={handleGenerateResumeClick} />
      <PreviewForm generateResume={generateResume} />
    </main>
  );
}

export default App;
