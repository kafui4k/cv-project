import React, { useState } from 'react';
import EducationalItem from './EducationalItem';

function Educational() {
  const [educationalExperiences, setEducationalExperiences] = useState([
    {
      id: Math.floor((Math.random() * 100) / 2),
      schoolAttended: '',
      studyTitle: '',
      studyType: '',
      start: '',
      end: '',
      location: ''
    }
  ]);

  const handleEducationalFormChange = (e, id) => {
    const newEduExperiences = educationalExperiences.map((eduExperience) => {
      if (id == eduExperience.id) {
        return { ...eduExperience, [e.target.name]: e.target.value };
      }
      return eduExperience;
    });
    setEducationalExperiences(newEduExperiences);
  };

  const handleAddNewEducationalExperience = () => {
    setEducationalExperiences([
      ...educationalExperiences,
      {
        id: Math.floor((Math.random() * 100) / 2),
        schoolAttended: '',
        studyTitle: '',
        studyType: '',
        start: '',
        end: '',
        location: ''
      }
    ]);
  };

  return (
    <div className="educational_experience_wrapper">
      <h1 className="educational_wrapper___title">Educational Experience</h1>
      {educationalExperiences.map((educaExp) => {
        return (
          <EducationalItem
            key={educaExp.id}
            educaExp={educaExp}
            onChange={handleEducationalFormChange}
          />
        );
      })}
      <button onClick={handleAddNewEducationalExperience}>
        add another experience
      </button>
    </div>
  );
}

export default Educational;
