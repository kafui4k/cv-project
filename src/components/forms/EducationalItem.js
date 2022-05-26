import React, { Component } from 'react'
import Input from '../Input'

class EducationalItem extends Component {
  render() {

    const {onChange, educaExp} = this.props

    return (
      <>
        
            <label htmlFor='schoolAttended'>School Attended</label>
            <Input
                id="schoolAttended"
                type='text'
                name='schoolAttended'
                placeholder='e.g: School of Hardknocks'
                value={educaExp.schoolAttended}
                onChange={(event) => onChange(event, educaExp.id)}
            />

            <label htmlFor='studyTitle'>Title of Study</label>
            <Input
                id="studyTitle"
                type='text'
                name='studyTitle'
                placeholder='e.g: BSC Computer Science'
                value={educaExp.studyTitle}
                onChange={(event) => onChange(event, educaExp.id)}
                />

             <label htmlFor='dateOfStudy'>Date of Study</label>
            <Input
                id="dateOfStudy"
                type='date'
                name='dateOfStudy'
                value={educaExp.dateOfStudy}
                onChange={(event) => onChange(event, educaExp.id)}
            />
      </>
    )
  }
}

export default EducationalItem