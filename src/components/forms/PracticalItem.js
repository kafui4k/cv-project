import React, { Component } from 'react'
import Input from '../Input'
import TextArea from '../TextArea'

class PracticalItem extends Component {
  render() {

    const {experience, onChange} = this.props;

    return (
      <>
        <label htmlFor='companyName'>Company Name</label>
        <Input
            type='text'
            name='companyName'
            placeholder='e.g: John Doe ent.'
            value={experience.companyName}
            onChange={(event) => onChange(event, experience.id)}
        />

        <label htmlFor='positionTitle'>Position Title</label>
        <Input
            type='text'
            name='positionTitle'
            placeholder='e.g: Senior Engineer'
            value={experience.positionTitle}
            onChange={(event) => onChange(event, experience.id)}
        />

        <label htmlFor='jobDescription'>Job/Role Description</label>
        <TextArea
            name='jobDescription'
            placeholder='e.g: A lot of stuff'
            value={experience.jobDescription}
            onChange={(event) => onChange(event, experience.id)}></TextArea>

        <label htmlFor='startDate'>Start Date</label>
        <Input
            type='date'
            name='startDate'
            value={experience.startDate}
            onChange={(event) => onChange(event, experience.id)}
        />

        <label htmlFor='endDate'>End Date</label>
        <Input
            type='date'
            name='endDate'
            value={experience.endDate}
            onChange={(event) => onChange(event, experience.id)}
        />
      </>
    )
  }
}

export default PracticalItem