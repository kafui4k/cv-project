import React, { useState } from 'react';
import Input from '../Input';

function Personal() {
  const [bioData, setBioData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    location: '',
    profileLink: ''
  });

  const handleBioDataFormChange = (event) => {
    setBioData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className="personal_info_wrapper">
      <h1 className="personal_info_wrapper___title">Personal Information</h1>

      <label htmlFor="firstname" className="personal_info_wrapper___label">
        First name
      </label>
      <Input
        id="firstname"
        type="text"
        name="firstname"
        placeholder="e.g: John from Hooks"
        value={bioData.firstname}
        onChange={handleBioDataFormChange}
      />

      <label htmlFor="lastname" className="personal_info_wrapper___label">
        Last name
      </label>
      <Input
        id="lastname"
        type="text"
        name="lastname"
        placeholder="e.g:Doe"
        value={bioData.lastname}
        onChange={handleBioDataFormChange}
      />

      <label htmlFor="email" className="personal_info_wrapper___label">
        Email address
      </label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="e.g: jd@admin.com"
        value={bioData.email}
        onChange={handleBioDataFormChange}
      />

      <label htmlFor="telephone" className="personal_info_wrapper___label">
        Mobile #
      </label>
      <Input
        id="telephone"
        type="tel"
        name="telephone"
        placeholder="e.g: 000 222 000 333"
        value={bioData.telephone}
        onChange={handleBioDataFormChange}
      />

      <label htmlFor="location" className="personal_info_wrapper___label">
        Location
      </label>
      <Input
        id="location"
        type="text"
        name="location"
        placeholder="e.g: Kumasi, Ashanti"
        value={bioData.location}
        onChange={handleBioDataFormChange}
      />

      <label htmlFor="profileLink" className="personal_info_wrapper___label">
        Profile Link
      </label>
      <Input
        id="profileLink"
        type="text"
        name="profileLink"
        placeholder="e.g: kafui4k.github.io"
        value={bioData.profileLink}
        onChange={handleBioDataFormChange}
      />
    </div>
  );
}

export default Personal;
