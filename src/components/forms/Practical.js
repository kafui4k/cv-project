import React, { Component } from 'react'
import PracticalItem from './PracticalItem'

class Practical extends Component {
  render() {

    const {
      workExperience,
      handleWorkExperienceFormChange,
      addNewWorkExperience
    } = this.props

    const workExperiences = workExperience.map(workExp => 
      <PracticalItem
        key={workExp.id}
        experience={workExp}
        onChange={handleWorkExperienceFormChange}
      />)

    return (
      <div className='practical_experience_wrapper'>
        <h1 className='pinfo___title'>Practical Experience</h1>
        {workExperiences}
        <button type='submit' onClick={addNewWorkExperience}>add another work experience</button>
      </div>
    )
  }
}

export default Practical