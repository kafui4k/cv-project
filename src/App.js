import { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        firstname: "Jeff Dean",
        lastname: 'Mscott',
        email: 'jeff.dean@yaol.com',
        telephone: '+233-20-34-33-234',
        educationalExperiences: [],
        educationalExperience: {
          schoolAttended: '',
          studyTitle: '',
          dateOfStudy: '',
        },
        workExperiences: [],
        workExperience: {
          companyName: '',
          positionTitle: '',
          jobDescription: '',
          startDate: '',
          endDate: ''
        }
        
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormChange(event) {
    this.setState({
          [event.target.name]: event.target.value,
          educationalExperience: {
            ...this.state.educationalExperience,
            [event.target.name]: event.target.value
          },
          workExperience: {
            ...this.state.workExperience,
            [event.target.name]: event.target.value
          }
      })
    }
    
  handleFormSubmit(event) {
    event.preventDefault();
    // alert('form submitted');
    console.log(this.state.educationalExperience)
    this.setState(prevState => {
      return {
        educationalExperiences: [...prevState.educationalExperiences, this.state.educationalExperience],
        workExperiences: [...prevState.workExperiences, this.state.workExperience],
      }
    })
  }

  render() {

    // const { educationalExperience } = this.state

    return (
      <main className="App">
        <section>
          <Form
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            telephone={this.state.telephone}
            schoolAttended={this.state.educationalExperience.schoolAttended}
            studyTitle={this.state.educationalExperience.studyTitle}
            dateOfStudy={this.state.educationalExperience.dateOfStudy}
            companyName={this.state.workExperience.companyName}
            jobDescription={this.state.workExperience.jobDescription}
            positionTitle={this.state.workExperience.positionTitle}
            startDate={this.state.workExperience.startDate}
            endDate={this.state.workExperience.endDate}
            handleFormChange={this.handleFormChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </section>
        <section>
          <div className='profile-header'>
            {this.state.telephone && this.state.telephone}
            <h3>{this.state.firstname && this.state.firstname} {this.state.lastname && this.state.lastname}</h3>
            <span>
              <ul>
                <li>{this.state.email && this.state.email}</li></ul>            
            </span>
          </div>
          
          <h3 className='profile___education___wrapper'>Educational Experience</h3>
            {this.state.educationalExperiences.map((eduExp, i) => (
                <div key={i + 1}>
                  <div className='profile-education'>
                    <h3>{eduExp.town}, {eduExp.city}</h3>
                    <h3>{eduExp.schoolAttended}</h3>
                    <h3>{eduExp.dateOfStudy}</h3>
                  </div>
                  <div className='profile___edication___town___program'>
                      <ul>
                        <li>{eduExp.studyTitle}</li>
                      </ul>
                  </div>
                </div>
            ))}       

          <h3 className='profile___work___wrapper'>Practical Experience</h3>
          {this.state.workExperiences ? this.state.workExperiences.map((workExp, i) => (
            <div key={i + 1}>
              <div className='profile-work'>
                <h3>{workExp.positionTitle}</h3>
                <h3>{workExp.companyName}</h3>
                <h3>{workExp.startDate} - {workExp.endDate}</h3>
              </div>
              <div>
                <span>Remote | Onsite</span>
                <ul>
                  <li>{workExp.jobDescription}</li>
                </ul>
              </div>
            </div>
          )) : null}
          
        </section>
      </main>
    );
  }
}


export default App;
