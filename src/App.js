import { Component } from 'react';
import Form from './components/Form';
import PreviewForm from './components/PreviewForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generateResume: false,
      workExperiences: [],
      workExperience: [
        {
          id: Math.floor((Math.random() * 100) / 2),
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

    this.handleWorkExperienceFormChange =
      this.handleWorkExperienceFormChange.bind(this);
    this.addNewWorkExperience = this.addNewWorkExperience.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleWorkExperienceFormChange(event, id) {
    this.setState((prevState) => ({
      ...prevState,
      workExperience: prevState.workExperience.map((workExpItem) =>
        workExpItem.id === id
          ? { ...workExpItem, [event.target.name]: event.target.value }
          : workExpItem
      )
    }));
  }

  addNewWorkExperience(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      workExperience: [
        ...prevState.workExperience,
        {
          id: Math.floor((Math.random() * 100) / 2),
          companyName: '',
          positionTitle: '',
          jobDescription: '',
          startDate: '',
          endDate: ''
        }
      ]
    }));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // this.setState((prevState) => ({
    //   ...prevState.educationalExperiences,
    //   educationalExperiences: this.state.educationalExperience,
    //   ...prevState.workExperiences,
    //   workExperiences: this.state.workExperience
    // }));

    // setTimeout(() => {
    //   this.setState({ generateResume: true });
    // }, 5000);
  }

  render() {
    return (
      <main className="App">
        <Form
          workExperience={this.state.workExperience}
          handleWorkExperienceFormChange={this.handleWorkExperienceFormChange}
          addNewWorkExperience={this.addNewWorkExperience}
          handleFormSubmit={this.handleFormSubmit}
        />
        <PreviewForm
          generateResume={this.state.generateResume}
          bioData={this.state.bioData}
          educationalExperiences={this.state.educationalExperiences}
          workExperiences={this.state.workExperiences}
        />
      </main>
    );
  }
}

export default App;
