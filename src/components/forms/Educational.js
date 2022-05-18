import React, { Component } from 'react'
import EducationalItem from './EducationalItem'

class Educational extends Component {
  render() {
  
    const {handleEducationalFormChange, educationalExperience, addNewEduExperience} = this.props

    const eduexpp = educationalExperience.map((educaExp) => 
      <EducationalItem
        key={educaExp.id}
        id={educaExp.id}
        educaExp={educaExp}
        onChange={handleEducationalFormChange}
      />
    )

    return (
      <div className='educational_experience_wrapper'>
        {eduexpp}        
        <button type='submit' onClick={addNewEduExperience}>add another experience</button>
      </div>
    )
  }
}

export default Educational