import React, { Component } from 'react'
import Educational from './forms/Educational';
import Personal from './forms/Personal';
import Practical from './forms/Practical';

class Form extends Component {
  render() {

    const {
        firstname,
        lastname,
        email,
        telephone,
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
                firstname={firstname}
                lastname={lastname}
                email={email}
                telephone={telephone}
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