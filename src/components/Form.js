import React, { Component } from 'react'
import Input from './Input';
import TextArea from './TextArea';

class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          firstname: '',
          lastname: '',
          email: '',
          telephone: '',
          schoolAttended: '',
          studyTitle: '',
          dateOfStudy: '',
          companyName: '',
          positionTitle: '',
          jobDescription: '',
          startDate: '',
          endDate: ''
        }
    
        this.handleFormChange = this.handleFormChange.bind(this)
        this.onSubmitForm = this.onSubmitForm.bind(this)
      }
    
      handleFormChange(event) {
          // handle form input change here
          this.setState({
              [event.target.name]: event.target.value
          })
      }
    
      onSubmitForm(e) {
        e.preventDefault();
      }
      
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
                value={this.state.firstname}
                onChange={this.handleFormChange}
            />

            <label htmlFor='lastname'>Last name</label>
            <Input
                type="text"
                name="lastname"
                placeholder='e.g:Doe'
                value={this.state.lastname}
                onChange={this.handleFormChange}
            />

            <label htmlFor='email'>Email address</label>
            <Input
                type="email"
                name="email"
                placeholder='e.g: jd@admin.com'
                value={this.state.email}
                onChange={this.handleFormChange}
            />

            <label htmlFor='telephone'>Tel</label>
            <Input
                type="tel"
                name="telephone"
                placeholder='e.g: 000 222 000 333'
                value={this.state.telephone}
                onChange={this.handleFormChange}
            />

            <h1 className='pinfo___title'>Educational Experience</h1>
            <label htmlFor='schoolAttended'>School Attended</label>
            <Input
                type='text'
                name='schoolAttended'
                placeholder='e.g: School of Hardknocks'
                value={this.state.schoolAttended}
                onChange={this.handleFormChange}
            />

            <label htmlFor='studyTitle'>Title of Study</label>
            <Input
                type='text'
                name='studyTitle'
                placeholder='e.g: BSC Computer Science'
                value={this.state.studyTitle}
                onChange={this.handleFormChange}
                />

            <label htmlFor='dateOfStudy'>Date of Study</label>
            <Input
                type='date'
                name='dateOfStudy'
                value={this.state.dateOfStudy}
                onChange={this.handleFormChange}
            />

            <h1 className='pinfo___title'>Practical Experience</h1>
            <label htmlFor='companyName'>Company Name</label>
            <Input
                type='text'
                name='companyName'
                placeholder='e.g: John Doe ent.'
                value={this.state.companyName}
                onChange={this.handleFormChange}
            />

            <label htmlFor='positionTitle'>Position Title</label>
            <Input
                type='text'
                name='positionTitle'
                placeholder='e.g: Senior Engineer'
                value={this.state.positionTitle}
                onChange={this.handleFormChange}
            />

            <label htmlFor='jobDescription'>Job/Role Description</label>
            <TextArea
                name='jobDescription'
                placeholder='e.g: A lot of stuff'
                value={this.state.jobDescription}
                onChange={this.handleFormChange}></TextArea>

            <label htmlFor='startDate'>Start Date</label>
            <Input
                type='date'
                name='startDate'
                value={this.state.startDate}
                onChange={this.handleFormChange}
            />

            <label htmlFor='endDate'>End Date</label>
            <Input
                type='date'
                name='endDate'
                value={this.state.endDate}
                onChange={this.handleFormChange}
            />
            
            <button className='btn-generate-resume' type='submit'>Submit</button>
            </form> 
      </section>
    )
  }
}

export default Form