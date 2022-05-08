import React, { Component } from 'react'

class Personal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        telephone: ''
      }

      this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(event) {
        // handle form input change here
        this.setState({
            [event.target.name]: event.target.value
        })
    }

  render() {
    return (
        <section className="pinfo___container">
            <form className='pinfo___form'>
                <h1 className='pinfo___title'>Personal Information</h1>
                <label htmlFor='firstname'>First name</label>
                <input
                    type="text"
                    name='firstname'
                    placeholder='e.g: John'
                    value={this.state.firstname}
                    onChange={this.handleFormChange}
                />
                <label htmlFor='lastname'>Last name</label>
                <input
                    type="text"
                    name='lastname'
                    placeholder='e.g:Doe'
                    value={this.state.lastname}
                    onChange={this.handleFormChange}
                />
                <label htmlFor='email'>Email address</label>
                <input
                    type="email"
                    name='email'
                    placeholder='e.g: jd@admin.com'
                    value={this.state.email}
                    onChange={this.handleFormChange}
                />
                <label htmlFor='telephone'>Tel</label>
                <input
                    type="tel"
                    name='telephone'
                    placeholder='e.g: 000 222 000 333'
                    value={this.state.telephone}
                    onChange={this.handleFormChange}
                />
            </form>     
        </section>           
    )
  }
}

export default Personal