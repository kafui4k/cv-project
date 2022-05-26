import React, { Component } from 'react'
import PracticalItem from './PracticalItem'

class Practical extends Component {
  render() {

    const {
      workExperience,
      handleWorkExperienceFormChange
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
      </div>
    )
  }
}

export default Practical