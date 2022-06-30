import React from 'react';
import PracticalItem from './PracticalItem';

function Practical({
  workExperienceDetails,
  handleWorkExperienceFormChange,
  addNewWorkExperience,
  handleDeleteWorkExperience
}) {
  return (
    <div className="practical_experience_wrapper">
      <h4 className="pinfo___title">Practical Experience</h4>
      {workExperienceDetails.map((workExperienceDetail) => {
        return (
          <PracticalItem
            key={workExperienceDetail.id}
            workexperiencedetail={workExperienceDetail}
            handleWorkExperienceFormChange={handleWorkExperienceFormChange}
            handleDeleteWorkExperience={handleDeleteWorkExperience}
          />
        );
      })}
      <div className="practical___experience___wrapper___buttons">
        <button onClick={addNewWorkExperience}>add experience</button>
      </div>
    </div>
  );
}

export default Practical;
