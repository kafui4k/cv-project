import React from 'react';
import Input from '../../input/Input';

import './education-experience.styles.scss';
import { DeleteButton } from '../../buttons/custom-button/custom-button.styles';

function EducationalItem({
  educationDetail,
  handleEducationalFormChange,
  handleRemoveEducationalExperience
}) {
  return (
    <section className="educational___experience___form_fields">
      <label htmlFor="schoolAttended">School Attended</label>
      <Input
        id="schoolAttended"
        type="text"
        name="schoolAttended"
        placeholder="eg: School of Hard knocks"
        value={educationDetail.schoolAttended}
        onChange={(event) =>
          handleEducationalFormChange(event, educationDetail.id)
        }
      />

      <label htmlFor="studyTitle">Title of Study</label>
      <Input
        id="studyTitle"
        type="text"
        name="studyTitle"
        placeholder="e.g: BSC Computer Science"
        value={educationDetail.studyTitle}
        onChange={(event) =>
          handleEducationalFormChange(event, educationDetail.id)
        }
      />

      <label htmlFor="studyType">Study Type</label>
      <Input
        id="studyType"
        type="text"
        name="studyType"
        placeholder="e.g: HND, BSC, MA etc..."
        value={educationDetail.studyType}
        onChange={(event) =>
          handleEducationalFormChange(event, educationDetail.id)
        }
      />

      <label htmlFor="location">Location</label>
      <Input
        id="location"
        type="text"
        name="location"
        placeholder="e.g: Ho, Volta Region"
        value={educationDetail.location}
        onChange={(event) =>
          handleEducationalFormChange(event, educationDetail.id)
        }
      />

      <label htmlFor="start">Start</label>
      <Input
        id="start"
        type="text"
        name="start"
        placeholder="August 2014"
        value={educationDetail.start}
        onChange={(event) =>
          handleEducationalFormChange(event, educationDetail.id)
        }
      />

      <label htmlFor="end">End</label>
      <Input
        id="end"
        type="text"
        name="end"
        placeholder="November 2017 / Present / On-going etc..."
        value={educationDetail.end}
        onChange={(event) =>
          handleEducationalFormChange(event, educationDetail.id)
        }
      />
      <DeleteButton
        type="button"
        onClick={() => handleRemoveEducationalExperience(educationDetail.id)}
      >
        delete experience
      </DeleteButton>
    </section>
  );
}

export default EducationalItem;
