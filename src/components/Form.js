import React, { Component } from 'react'
import Educational from './forms/Educational';
import Personal from './forms/Personal';
import Practical from './forms/Practical';

class Form extends Component {
  render() {

    const {
        bioData,
        handleFormChange,
        handleFormSubmit,
        educationalExperience,
        handleEducationalFormChange,
        addNewEduExperience,
        workExperience,
        handleWorkExperienceFormChange,
        addNewWorkExperience
    } = this.props

    return (
        <form className='pinfo___form' onSubmit={handleFormSubmit}>
            <Personal
                firstname={bioData.firstname}
                lastname={bioData.lastname}
                email={bioData.email}
                telephone={bioData.telephone}
                handleFormChange={handleFormChange}
            />
            <Educational
                educationalExperience={educationalExperience}
                addNewEduExperience={addNewEduExperience}
                handleEducationalFormChange={handleEducationalFormChange}
            />
            <Practical
                workExperience={workExperience}
                handleWorkExperienceFormChange={handleWorkExperienceFormChange}
                addNewWorkExperience={addNewWorkExperience}
            />
            <button className='btn-generate-resume' type='submit'>Submit</button>
        </form> 
    )
  }
}

export default Form