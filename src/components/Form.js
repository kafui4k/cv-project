import React from 'react';
import Personal from './forms/Personal';
import Educational from './forms/Educational';
import Practical from './forms/Practical';

function Form({ handleFormSubmit }) {
  return (
    <section className="form_fields_wrapper">
      <Personal />
      <Educational />
      <Practical />
      <button
        className="form_fields_wrapper___button"
        onClick={handleFormSubmit}
      >
        Generate resume
      </button>
    </section>
  );
}

export default Form;
