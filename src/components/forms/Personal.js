import React, { Component } from 'react'
import Input from '../Input'

class Personal extends Component {
  render() {

    const {firstname, lastname, email, telephone, handleFormChange} = this.props

    return (
      <div className='personal_info_wrapper'>
        <h1 className='personal_info_wrapper___title'>Personal Information</h1>
        
        <label htmlFor='firstname' className='personal_info_wrapper___label'>First name</label>
        <Input
            id='firstname'
            type="text"
            name="firstname"
            placeholder='e.g: John'
            value={firstname}
            onChange={handleFormChange}
        />

        <label htmlFor='lastname' className='personal_info_wrapper___label'>Last name</label>
        <Input
          id='lastname'
          type="text"
          name="lastname"
          placeholder='e.g:Doe'
          value={lastname}
          onChange={handleFormChange}
        />

        <label htmlFor='email' className='personal_info_wrapper___label'>Email address</label>
        <Input
            id='email'
            type="email"
            name="email"
            placeholder='e.g: jd@admin.com'
            value={email}
            onChange={handleFormChange}
        />

        <label htmlFor='telephone' className='personal_info_wrapper___label'>Tel</label>
        <Input
            id='telephone'
            type="tel"
            name="telephone"
            placeholder='e.g: 000 222 000 333'
            value={telephone}
            onChange={handleFormChange}
        />
      </div>
    )
  }
}

export default Personal