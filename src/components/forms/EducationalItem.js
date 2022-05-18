import React, { Component } from 'react'
import Input from '../Input'

class EducationalItem extends Component {
  render() {

    const {id, onChange, educaExp} = this.props

    return (
      <>
        <h1 className='educational_wrapper___title'>Educational Experience</h1>
            <label htmlFor='schoolAttended'>School Attended</label>
            <Input
                id="schoolAttended"
                type='text'
                name='schoolAttended'
                placeholder='e.g: School of Hardknocks'
                value={educaExp.schoolAttended}
                onChange={(event) => onChange(event, id)}
            />

            <label htmlFor='studyTitle'>Title of Study</label>
            <Input
                id="studyTitle"
                type='text'
                name='studyTitle'
                placeholder='e.g: BSC Computer Science'
                value={educaExp.studyTitle}
                onChange={(event) => onChange(event, id)}
                />

             <label htmlFor='dateOfStudy'>Date of Study</label>
            <Input
                id="dateOfStudy"
                type='date'
                name='dateOfStudy'
                value={educaExp.dateOfStudy}
                onChange={(event) => onChange(event, id)}
            />
      </>
    )
  }
}

export default EducationalItem