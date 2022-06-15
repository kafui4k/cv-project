import React, { useState } from 'react';
import PracticalItem from './PracticalItem';

function Practical() {
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: Math.floor((Math.random() * 100) / 2),
      companyName: '',
      positionTitle: '',
      jobType: '',
      location: '',
      jobDescription: '',
      startDate: '',
      endDate: ''
    }
  ]);

  const handleWorkExperienceFormChange = (e, id) => {
    const newWorkExperiences = workExperiences.map((workExperience) => {
      if (id === workExperience.id) {
        return { ...workExperience, [e.target.name]: e.target.value };
      }
      return workExperience;
    });
    setWorkExperiences(newWorkExperiences);
  };

  const addNewWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        id: Math.floor((Math.random() * 100) / 2),
        companyName: '',
        positionTitle: '',
        jobType: '',
        location: '',
        jobDescription: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  return (
    <div className="practical_experience_wrapper">
      <h4 className="pinfo___title">Practical Experience</h4>
      {workExperiences.map((workExp) => {
        return (
          <PracticalItem
            key={workExp.id}
            experience={workExp}
            onChange={handleWorkExperienceFormChange}
          />
        );
      })}
      <div className="practical___experience___wrapper___buttons">
        <button onClick={() => alert('delete this experience')}>
          delete experience
        </button>
        <button onClick={addNewWorkExperience}>add another experience</button>
      </div>
    </div>
  );
}

export default Practical;
