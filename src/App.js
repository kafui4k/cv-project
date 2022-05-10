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
        schoolAttended: 'MIT',
        studyTitle: 'Computer Sceince Major - Robotics',
        dateOfStudy: '2022',
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
    return (
      <main className="App">
        <Form
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          email={this.state.email}
          telephone={this.state.telephone}
          handleFormChange={this.handleFormChange}
          schoolAttended={this.state.schoolAttended}
          studyTitle={this.state.studyTitle}
          dateOfStudy={this.state.dateOfStudy}
          companyName={this.state.companyName}
          jobDescription={this.state.jobDescription}
          positionTitle={this.state.positionTitle}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <section>
          <div className='profile-header'>
            {this.state.telephone}
            <h3>{this.state.firstname} {this.state.lastname}</h3>
            <span>
              <ul>
                <li>{this.state.email}</li></ul>            
            </span>
          </div>
          
          <h3>Educational Experience</h3>
          <div className='profile-education'>
            <h3>Town, Town</h3>
            <h3>{this.state.schoolAttended}</h3>
            <h3>{this.state.dateOfStudy}</h3>
          </div>
          <div className='profile___edication___town___program'>
              <ul>
                <li>{this.state.studyTitle}</li>
              </ul>
          </div>

          <h3>Practical Experience</h3>
          <div className='profile-work'>
            <h3>{this.state.positionTitle}</h3>
            <h3>{this.state.companyName}</h3>
            <h3>{this.state.startDate} - {this.state.endDate}</h3>
          </div>
          <div>
            <span>Remote | Onsite</span>
            <ul>
              <li>{this.state.jobDescription}</li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
