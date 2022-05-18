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
        companyName,
        jobDescription,
        positionTitle,
        startDate,
        endDate,
        handleFormChange,
        addNewEduExperience,
        handleFormSubmit,
        educationalExperience,
        handleEducationalFormChange
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
                companyName={companyName}
                jobDescription={jobDescription}
                positionTitle={positionTitle}
                startDate={startDate}
                endDate={endDate}
                handleFormChange={handleFormChange}
            />
            <button className='btn-generate-resume' type='submit' onClick={handleFormSubmit}>Submit</button>
        </form> 
    )
  }
}

export default Form