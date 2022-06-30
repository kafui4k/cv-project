import React, { Component } from 'react';
import Personal from './forms/Personal';
import Educational from './forms/Educational';
import Practical from './forms/Practical';
import PreviewForm from './PreviewForm';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      biodata: {
        firstname: '',
        lastname: '',
        email: '',
        telephone: '',
        location: '',
        profileLink: ''
      },
      educationalDetails: [
        {
          id: Math.floor(Math.random() * 0 + 1),
          schoolAttended: '',
          studyTitle: '',
          studyType: '',
          start: '',
          end: '',
          location: ''
        }
      ],
      workExperienceDetails: [
        {
          id: Math.floor(Math.random() * 0 + 1),
          companyName: '',
          positionTitle: '',
          jobType: '',
          location: '',
          jobDescription: '',
          startDate: '',
          endDate: ''
        }
      ]
    };
  }

  handleBioDataFormChange = (event) => {
    this.setState((prevState) => ({
      biodata: { ...prevState.biodata, [event.target.name]: event.target.value }
    }));
  };

  handleEducationalFormChange = (e, id) => {
    const newEduExperiences = this.state.educationalDetails.map(
      (eduExperience) => {
        if (id === eduExperience.id) {
          return { ...eduExperience, [e.target.name]: e.target.value };
        }
        return eduExperience;
      }
    );
    this.setState({ educationalDetails: newEduExperiences });
  };

  handleAddNewEducationalExperience = () => {
    this.setState((prevState) => ({
      educationalDetails: [
        ...prevState.educationalDetails,
        {
          id: this.state.educationalDetails.length + 1,
          schoolAttended: '',
          studyTitle: '',
          studyType: '',
          start: '',
          end: '',
          location: ''
        }
      ]
    }));
  };

  handleRemoveEducationalExperience = (id) => {
    this.setState({
      educationalDetails: this.state.educationalDetails.filter(
        (educationalDetail) => educationalDetail.id !== id
      )
    });
  };

  handleWorkExperienceFormChange = (e, id) => {
    const newWorkExperiences = this.state.workExperienceDetails.map(
      (workExperienceDetail) => {
        if (id === workExperienceDetail.id) {
          return { ...workExperienceDetail, [e.target.name]: e.target.value };
        }
        return workExperienceDetail;
      }
    );
    this.setState({ workExperienceDetails: newWorkExperiences });
  };

  addNewWorkExperience = () => {
    this.setState((prevState) => ({
      workExperienceDetails: [
        ...prevState.workExperienceDetails,
        {
          id: this.state.workExperienceDetails.length + 1,
          companyName: '',
          positionTitle: '',
          jobType: '',
          location: '',
          jobDescription: '',
          startDate: '',
          endDate: ''
        }
      ]
    }));
  };

  handleDeleteWorkExperience = (id) => {
    this.setState({
      workExperienceDetails: this.state.workExperienceDetails.filter(
        (workExperience) => workExperience.id !== id
      )
    });
  };

  handleFormSubmit = () => {
    console.log(this.state.biodata);
  };

  submitFormHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="main">
        <section className="form_fields_wrapper">
          <form onSubmit={this.submitFormHandler}>
            <Personal
              biodata={this.state.biodata}
              handleBioDataFormChange={this.handleBioDataFormChange}
            />
            <Educational
              educationalDetails={this.state.educationalDetails}
              handleEducationalFormChange={this.handleEducationalFormChange}
              handleAddNewEducationalExperience={
                this.handleAddNewEducationalExperience
              }
              handleRemoveEducationalExperience={
                this.handleRemoveEducationalExperience
              }
            />
            <Practical
              workExperienceDetails={this.state.workExperienceDetails}
              handleWorkExperienceFormChange={
                this.handleWorkExperienceFormChange
              }
              addNewWorkExperience={this.addNewWorkExperience}
              handleDeleteWorkExperience={this.handleDeleteWorkExperience}
            />
            {/* <button
              className="form_fields_wrapper___button"
              onClick={this.handleFormSubmit}
            >
              Generate resume
            </button> */}
          </form>
        </section>
        <PreviewForm
          data={this.state.biodata}
          educationalDetails={this.state.educationalDetails}
          workExperienceDetails={this.state.workExperienceDetails}
        />
      </div>
    );
  }
}

export default Form;
