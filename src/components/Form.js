import React, { Component } from 'react'
import Input from './Input';
import TextArea from './TextArea';

class Form extends Component {
  render() {
    return (
        <section className='content'>
            <form className='pinfo___form' onSubmit={this.onSubmitForm}>
            <h1 className='pinfo___title'>Personal Information</h1>
            <label htmlFor='firstname'>First name</label>
            <Input 
                type="text"
                name="firstname"
                placeholder='e.g: John'
                value={this.props.firstname}
                onChange={this.props.handleFormChange}
            />

            <label htmlFor='lastname'>Last name</label>
            <Input
                type="text"
                name="lastname"
                placeholder='e.g:Doe'
                value={this.props.lastname}
                onChange={this.props.handleFormChange}
            />

            <label htmlFor='email'>Email address</label>
            <Input
                type="email"
                name="email"
                placeholder='e.g: jd@admin.com'
                value={this.props.email}
                onChange={this.props.handleFormChange}
            />

            <label htmlFor='telephone'>Tel</label>
            <Input
                type="tel"
                name="telephone"
                placeholder='e.g: 000 222 000 333'
                value={this.props.telephone}
                onChange={this.props.handleFormChange}
            />

            <h1 className='pinfo___title'>Educational Experience</h1>
            <label htmlFor='schoolAttended'>School Attended</label>
            <Input
                type='text'
                name='schoolAttended'
                placeholder='e.g: School of Hardknocks'
                value={this.props.schoolAttended}
                onChange={this.props.handleFormChange}
            />

            <label htmlFor='studyTitle'>Title of Study</label>
            <Input
                type='text'
                name='studyTitle'
                placeholder='e.g: BSC Computer Science'
                value={this.props.studyTitle}
                onChange={this.props.handleFormChange}
                />

             <label htmlFor='dateOfStudy'>Date of Study</label>
            <Input
                type='date'
                name='dateOfStudy'
                value={this.props.dateOfStudy}
                onChange={this.props.handleFormChange}
            />

            <h1 className='pinfo___title'>Practical Experience</h1>
            <label htmlFor='companyName'>Company Name</label>
            <Input
                type='text'
                name='companyName'
                placeholder='e.g: John Doe ent.'
                value={this.props.companyName}
                onChange={this.props.handleFormChange}
            />

            <label htmlFor='positionTitle'>Position Title</label>
            <Input
                type='text'
                name='positionTitle'
                placeholder='e.g: Senior Engineer'
                value={this.props.positionTitle}
                onChange={this.props.handleFormChange}
            />

            <label htmlFor='jobDescription'>Job/Role Description</label>
            <TextArea
                name='jobDescription'
                placeholder='e.g: A lot of stuff'
                value={this.props.jobDescription}
                onChange={this.props.handleFormChange}></TextArea>

            <label htmlFor='startDate'>Start Date</label>
            <Input
                type='date'
                name='startDate'
                value={this.props.startDate}
                onChange={this.props.handleFormChange}
            />

            <label htmlFor='endDate'>End Date</label>
            <Input
                type='date'
                name='endDate'
                value={this.props.endDate}
                onChange={this.props.handleFormChange}
            />
            
            <button className='btn-generate-resume' type='submit'>Submit</button>
            </form> 
      </section>
    )
  }
}

export default Form