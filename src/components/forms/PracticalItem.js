import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

function PracticalItem(props) {
  const { experience, onChange } = props;

  return (
    <>
      <label htmlFor="companyName">Company Name</label>
      <Input
        type="text"
        name="companyName"
        placeholder="e.g: John Doe ent."
        value={experience.companyName}
        onChange={(event) => onChange(event, experience.id)}
      />

      <label htmlFor="positionTitle">Position Title</label>
      <Input
        type="text"
        name="positionTitle"
        placeholder="e.g: Senior Engineer"
        value={experience.positionTitle}
        onChange={(event) => onChange(event, experience.id)}
      />

      <label htmlFor="jobType">Job Type</label>
      <Input
        type="text"
        name="jobType"
        placeholder="e.g: Contract/ Full-Time/ Part-Time etc..."
        value={experience.jobType}
        onChange={(event) => onChange(event, experience.id)}
      />

      <label htmlFor="location">Location</label>
      <Input
        type="text"
        name="location"
        placeholder="e.g: Remote/Onsite etc..."
        value={experience.location}
        onChange={(event) => onChange(event, experience.id)}
      />

      <label htmlFor="jobDescription">Job/Role Description</label>
      <TextArea
        name="jobDescription"
        placeholder="e.g: A lot of stuff"
        value={experience.jobDescription}
        onChange={(event) => onChange(event, experience.id)}
      ></TextArea>

      <label htmlFor="startDate">Start Date</label>
      <Input
        type="text"
        name="startDate"
        placeholder="September 2020"
        value={experience.startDate}
        onChange={(event) => onChange(event, experience.id)}
      />

      <label htmlFor="endDate">End Date</label>
      <Input
        type="text"
        name="endDate"
        placeholder="January 2022 / Present etc..."
        value={experience.endDate}
        onChange={(event) => onChange(event, experience.id)}
      />
    </>
  );
}

export default PracticalItem;
