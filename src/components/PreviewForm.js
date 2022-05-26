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
        <br/>
        {this.props.workExperience.map(wrkExp =>
          <span key={wrkExp.id}>
            <br/>companyName: {wrkExp.companyName}
            <br/>jobDescription: {wrkExp.jobDescription}
            <br/>positionTitle: {wrkExp.positionTitle}
            <br/>startDate: {wrkExp.startDate}
            <br/>endDate: {wrkExp.endDate}
          </span>
          )}
      </section>
    )
  }
}

export default PreviewForm