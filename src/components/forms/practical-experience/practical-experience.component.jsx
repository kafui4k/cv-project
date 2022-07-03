import React from 'react';
import PracticalItem from './practical-item.component';

import CustomButton from '../../buttons/custom-button/custom-button.component';
import './practical-experience.styles.scss';

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
        <CustomButton
          primary={'primary'}
          onClick={addNewWorkExperience}
          text="add experience"
        />
      </div>
    </div>
  );
}

export default Practical;
