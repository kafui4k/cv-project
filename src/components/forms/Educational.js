import React, { Component } from 'react'
import Input from '../Input'

class Educational extends Component {
  
  render() {
    
    const {schoolAttended, studyTitle, dateOfStudy, handleFormChange} = this.props

    return (
      <div className='educational_experience_wrapper'>
        <h1 className='educational_wrapper___title'>Educational Experience</h1>
            <label htmlFor='schoolAttended'>School Attended</label>
            <Input
                id="schoolAttended"
                type='text'
                name='schoolAttended'
                placeholder='e.g: School of Hardknocks'
                value={schoolAttended}
                onChange={handleFormChange}
            />

            <label htmlFor='studyTitle'>Title of Study</label>
            <Input
                id="studyTitle"
                type='text'
                name='studyTitle'
                placeholder='e.g: BSC Computer Science'
                value={studyTitle}
                onChange={handleFormChange}
                />

             <label htmlFor='dateOfStudy'>Date of Study</label>
            <Input
                id="dateOfStudy"
                type='date'
                name='dateOfStudy'
                value={dateOfStudy}
                onChange={handleFormChange}
            />
      </div>
    )
  }
}

export default Educational