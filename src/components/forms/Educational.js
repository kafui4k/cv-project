import React, { useState } from 'react';
import EducationalItem from './EducationalItem';

function Educational() {
  const [educationalExperiences, setEducationalExperiences] = useState([
    {
      id: Math.floor(Math.random() * 0 + 1),
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
        id: educationalExperiences.length + 1,
        schoolAttended: '',
        studyTitle: '',
        studyType: '',
        start: '',
        end: '',
        location: ''
      }
    ]);
  };

  const handleRemoveEducationalExperience = (id) => {
    setEducationalExperiences(
      educationalExperiences.filter((eduExperience) => eduExperience.id !== id)
    );
  };

  return (
    <div className="educational_experience_wrapper">
      <h4 className="educational_wrapper___title">Educational Experience</h4>
      {educationalExperiences &&
        educationalExperiences.map((educaExp) => {
          return (
            <>
              <EducationalItem
                key={educaExp.id}
                educaExp={educaExp}
                onChange={handleEducationalFormChange}
              />
              <button
                onClick={() => handleRemoveEducationalExperience(educaExp.id)}
              >
                delete experience
              </button>
            </>
          );
        })}
      <div className="educational___experience___wrapper___buttons">
        <button onClick={handleAddNewEducationalExperience}>
          add another experience
        </button>
      </div>
    </div>
  );
}

export default Educational;
