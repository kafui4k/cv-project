import React from 'react';
import Input from '../../Input';
import TextArea from '../../TextArea';

import CustomButton from '../../buttons/custom-button/custom-button.component';
import './practical-experience.styles.scss';

function PracticalItem({
  workexperiencedetail,
  handleWorkExperienceFormChange,
  handleDeleteWorkExperience
}) {
  return (
    <section className="practical___experience___form_fields">
      <label htmlFor="companyName">Company Name</label>
      <Input
        type="text"
        name="companyName"
        placeholder="e.g: John Doe ent."
        value={workexperiencedetail.companyName}
        onChange={(event) =>
          handleWorkExperienceFormChange(event, workexperiencedetail.id)
        }
      />

      <label htmlFor="positionTitle">Position Title</label>
      <Input
        type="text"
        name="positionTitle"
        placeholder="e.g: Senior Engineer"
        value={workexperiencedetail.positionTitle}
        onChange={(event) =>
          handleWorkExperienceFormChange(event, workexperiencedetail.id)
        }
      />

      <label htmlFor="jobType">Job Type</label>
      <Input
        type="text"
        name="jobType"
        placeholder="e.g: Contract/ Full-Time/ Part-Time etc..."
        value={workexperiencedetail.jobType}
        onChange={(event) =>
          handleWorkExperienceFormChange(event, workexperiencedetail.id)
        }
      />

      <label htmlFor="location">Location</label>
      <Input
        type="text"
        name="location"
        placeholder="e.g: Remote/Onsite etc..."
        value={workexperiencedetail.location}
        onChange={(event) =>
          handleWorkExperienceFormChange(event, workexperiencedetail.id)
        }
      />

      <label htmlFor="jobDescription">Job/Role Description</label>
      <TextArea
        name="jobDescription"
        placeholder="e.g: A lot of stuff"
        value={workexperiencedetail.jobDescription}
        onChange={(event) =>
          handleWorkExperienceFormChange(event, workexperiencedetail.id)
        }
      ></TextArea>

      <label htmlFor="startDate">Start Date</label>
      <Input
        type="text"
        name="startDate"
        placeholder="September 2020"
        value={workexperiencedetail.startDate}
        onChange={(event) =>
          handleWorkExperienceFormChange(event, workexperiencedetail.id)
        }
      />

      <label htmlFor="endDate">End Date</label>
      <Input
        type="text"
        name="endDate"
        placeholder="January 2022 / Present etc..."
        value={workexperiencedetail.endDate}
        onChange={(event) =>
          handleWorkExperienceFormChange(event, workexperiencedetail.id)
        }
      />
      <CustomButton
        type={'button'}
        onClick={() => handleDeleteWorkExperience(workexperiencedetail.id)}
        text="delete experience"
      />
    </section>
  );
}

export default PracticalItem;
