import React, { Component } from 'react'

class PreviewForm extends Component {
  render() {
    return (
      <section>
        <h1>Preview Form</h1>
        <br/>firstname {this.props.firstname}
        <br/>lastname {this.props.lastname}
        <br/>email {this.props.email}
        <br/>telephone {this.props.telephone}
        <br/>{this.props.educationalExperience.map(eduXp => 
          <span key={eduXp.id}>
            <strong>schoolAttended: {eduXp.schoolAttended}</strong>
            <br/><strong>title: {eduXp.studyTitle}</strong>
            <br/><strong>date: {eduXp.dateOfStudy}</strong>
          </span>
        )}
        <br/>companyName: {this.props.companyName}
        <br/>jobDescription: {this.props.jobDescription}
        <br/>positionTitle: {this.props.positionTitle}
        <br/>startDate: {this.props.startDate}
        <br/>endDate: {this.props.endDate}
      </section>
    )
  }
}

export default PreviewForm