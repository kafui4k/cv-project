import { Component } from 'react';
import Form from './components/Form';
import PreviewForm from './components/PreviewForm';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname: "Jeff Dean",
       lastname: 'Mscott',
        email: 'jeff.dean@yaol.com',
        telephone: '+233-20-34-33-234',
        eduExps: [
          {
            schoolAttended: 'MIT',
            studyTitle: 'Computer Sceince Major - Robotics',
            dateOfStudy: '2022',
          }
        ],
        companyName: 'builds and support',
        positionTitle: 'Software Developer - Full Stack',
        jobDescription: 'Build customer facing application solutions',
        startDate: '2022',
        endDate: 'present'
    }

    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(event) {
    // handle form input change here
    this.setState( {
      [event.target.name]: event.target.value
    })
  }

  render() {
    const eduExperiences = this.state.eduExps.map(eduExp => eduExp)
    return (
      <main className="App">
        <Form
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          email={this.state.email}
          telephone={this.state.telephone}
          handleFormChange={this.handleFormChange}
          eduExperience={eduExperiences}
          companyName={this.state.companyName}
          jobDescription={this.state.jobDescription}
          positionTitle={this.state.positionTitle}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <section>{this.state.firstname}</section>
      </main>
    );
  }
}

export default App;
