import React from 'react';
import EducationalItem from './EducationalItem';

function Educational({
  educationalDetails,
  handleEducationalFormChange,
  handleAddNewEducationalExperience,
  handleRemoveEducationalExperience
}) {
  return (
    <div className="educational_experience_wrapper">
      <h4 className="educational_wrapper___title">Educational Experience</h4>
      {educationalDetails.map((educationDetail) => {
        return (
          <EducationalItem
            key={educationDetail.id}
            educationDetail={educationDetail}
            handleEducationalFormChange={handleEducationalFormChange}
            handleRemoveEducationalExperience={
              handleRemoveEducationalExperience
            }
          />
        );
      })}
      <div className="educational___experience___wrapper___buttons">
        <button onClick={handleAddNewEducationalExperience}>
          add experience
        </button>
      </div>
    </div>
  );
}

export default Educational;
