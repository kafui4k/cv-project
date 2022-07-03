import React from 'react';
import EducationalItem from './education-item.component';

import CustomButton from '../../buttons/custom-button/custom-button.component';
import './education-experience.styles.scss';

function Educational({
  educationalDetails,
  handleEducationalFormChange,
  handleAddNewEducationalExperience,
  handleRemoveEducationalExperience
}) {
  return (
    <div className="educational_experience_wrapper">
      <h4 className="educational___experience___wrapper___title">
        Educational Experience
      </h4>
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
        <CustomButton
          type={'button'}
          primary={'primary'}
          onClick={handleAddNewEducationalExperience}
          text="add experience"
        />
      </div>
    </div>
  );
}

export default Educational;
