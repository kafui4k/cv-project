import React, { Component } from 'react';
import Personal from './forms/Personal';
import Educational from './forms/Educational';
// import Practical from './forms/Practical';
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
      }
    };
  }

  handleBioDataFormChange = (event) => {
    this.setState((prevState) => ({
      biodata: { ...prevState.biodata, [event.target.name]: event.target.value }
    }));
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
            <Educational />
            {/* <Practical /> */}
            {/* <button
              className="form_fields_wrapper___button"
              onClick={this.handleFormSubmit}
            >
              Generate resume
            </button> */}
          </form>
        </section>
        <PreviewForm data={this.state.biodata} />
      </div>
    );
  }
}

export default Form;
