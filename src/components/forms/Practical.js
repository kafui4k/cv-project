import React, { Component } from 'react'
import Input from '../Input'
import TextArea from '../TextArea'

class Practical extends Component {
  render() {

    const {companyName, jobDescription, positionTitle, startDate, endDate,
      handleFormChange} = this.props

    return (
      <div className='practical_experience_wrapper'>
        <h1 className='pinfo___title'>Practical Experience</h1>
            <label htmlFor='companyName'>Company Name</label>
            <Input
                type='text'
                name='companyName'
                placeholder='e.g: John Doe ent.'
                value={companyName}
                onChange={handleFormChange}
            />

            <label htmlFor='positionTitle'>Position Title</label>
            <Input
                type='text'
                name='positionTitle'
                placeholder='e.g: Senior Engineer'
                value={positionTitle}
                onChange={handleFormChange}
            />

            <label htmlFor='jobDescription'>Job/Role Description</label>
            <TextArea
                name='jobDescription'
                placeholder='e.g: A lot of stuff'
                value={jobDescription}
                onChange={handleFormChange}></TextArea>

            <label htmlFor='startDate'>Start Date</label>
            <Input
                type='date'
                name='startDate'
                value={startDate}
                onChange={handleFormChange}
            />

            <label htmlFor='endDate'>End Date</label>
            <Input
                type='date'
                name='endDate'
                value={endDate}
                onChange={handleFormChange}
            />

       
      </div>
    )
  }
}

export default Practical