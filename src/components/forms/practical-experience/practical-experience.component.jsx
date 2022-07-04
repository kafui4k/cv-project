import React from 'react';
import PracticalItem from './practical-item.component';

import { Button } from '../../buttons/custom-button/custom-button.styles';
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
        <Button type="button" primary="primary" onClick={addNewWorkExperience}>
          add experience
        </Button>
      </div>
    </div>
  );
}

export default Practical;
