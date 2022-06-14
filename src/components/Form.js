import React from 'react';
import Personal from './forms/Personal';
import Educational from './forms/Educational';
import Practical from './forms/Practical';

function Form(props) {
  const {
    handleFormSubmit,
    workExperience,
    handleWorkExperienceFormChange,
    addNewWorkExperience
  } = props;

  return (
    <form className="pinfo___form" onSubmit={handleFormSubmit}>
      <Personal />
      <Educational />
      <Practical
        workExperience={workExperience}
        handleWorkExperienceFormChange={handleWorkExperienceFormChange}
        addNewWorkExperience={addNewWorkExperience}
      />
      <button className="btn-generate-resume" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
