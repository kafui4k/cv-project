import React from 'react';
import Input from '../Input';

function EducationalItem({ educaExp, onChange }) {
  return (
    <section className="educational___experience___form_fields">
      <label htmlFor="schoolAttended">School Attended</label>
      <Input
        id="schoolAttended"
        type="text"
        name="schoolAttended"
        placeholder="eg: School of Hard knocks"
        value={educaExp.schoolAttended}
        onChange={(event) => onChange(event, educaExp.id)}
      />

      <label htmlFor="studyTitle">Title of Study</label>
      <Input
        id="studyTitle"
        type="text"
        name="studyTitle"
        placeholder="e.g: BSC Computer Science"
        value={educaExp.studyTitle}
        onChange={(event) => onChange(event, educaExp.id)}
      />

      <label htmlFor="studyType">Study Type</label>
      <Input
        id="studyType"
        type="text"
        name="studyType"
        placeholder="e.g: HND, BSC, MA etc..."
        value={educaExp.studyType}
        onChange={(event) => onChange(event, educaExp.id)}
      />

      <label htmlFor="location">Location</label>
      <Input
        id="location"
        type="text"
        name="location"
        placeholder="e.g: Ho, Volta Region"
        value={educaExp.location}
        onChange={(event) => onChange(event, educaExp.id)}
      />

      <label htmlFor="start">Start</label>
      <Input
        id="start"
        type="text"
        name="start"
        placeholder="August 2014"
        value={educaExp.start}
        onChange={(event) => onChange(event, educaExp.id)}
      />

      <label htmlFor="end">End</label>
      <Input
        id="end"
        type="text"
        name="end"
        placeholder="November 2017 / Present / On-going etc..."
        value={educaExp.end}
        onChange={(event) => onChange(event, educaExp.id)}
      />
    </section>
  );
}

export default EducationalItem;
