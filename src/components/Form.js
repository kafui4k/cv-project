import React from 'react';
import Personal from './forms/Personal';
import Educational from './forms/Educational';
import Practical from './forms/Practical';

function Form(props) {
  const { handleFormSubmit } = props;

  return (
    <form className="pinfo___form" onSubmit={handleFormSubmit}>
      <Personal />
      <Educational />
      <Practical />
      <button className="btn-generate-resume" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
