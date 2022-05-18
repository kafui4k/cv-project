import React, { Component } from 'react'

class PreviewForm extends Component {
  render() {
    return (
      <section>
        <h1>Preview Form</h1>
        schoolAttended: {this.props.educationalExperience.schoolAttended}
        firstname {this.props.firstname}
        lastname {this.props.lastname}
        email {this.props.email}
        telephone {this.props.telephone}
      </section>
    )
  }
}

export default PreviewForm