import React, { Component } from 'react'
import Input from '../Input'

class Personal extends Component {
  render() {

    const {firstname, lastname, email, telephone, handleBioDataFormChange} = this.props

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
            onChange={handleBioDataFormChange}
        />

        <label htmlFor='lastname' className='personal_info_wrapper___label'>Last name</label>
        <Input
          id='lastname'
          type="text"
          name="lastname"
          placeholder='e.g:Doe'
          value={lastname}
          onChange={handleBioDataFormChange}
        />

        <label htmlFor='email' className='personal_info_wrapper___label'>Email address</label>
        <Input
            id='email'
            type="email"
            name="email"
            placeholder='e.g: jd@admin.com'
            value={email}
            onChange={handleBioDataFormChange}
        />

        <label htmlFor='telephone' className='personal_info_wrapper___label'>Tel</label>
        <Input
            id='telephone'
            type="tel"
            name="telephone"
            placeholder='e.g: 000 222 000 333'
            value={telephone}
            onChange={handleBioDataFormChange}
        />
      </div>
    )
  }
}

export default Personal