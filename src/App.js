import { Component } from 'react';
import Form from './components/Form';
import PreviewForm from './components/PreviewForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        bioData: {
          firstname: "Jeff Dean",
          lastname: 'Mscott',
          email: 'jeff.dean@yaol.com',
          telephone: '+233-20-34-33-234',
        },
        educationalExperiences: [],
        educationalExperience: [
          {
            id: Math.floor(Math.random() * 100 / 2),
            schoolAttended: 'Bishop Herman College',
            studyTitle: 'Business',
            dateOfStudy: '',
            town: 'ho',
            city: 'Volta'
          }
        ],
        workExperiences: [],
        workExperience: [{
          id: Math.floor(Math.random() * 100 / 2),
          companyName: '',
          positionTitle: '',
          jobDescription: '',
          startDate: '',
          endDate: ''
        }]
        
    }

    this.handleBioDataFormChange = this.handleBioDataFormChange.bind(this)
    this.addNewEduExperience = this.addNewEduExperience.bind(this)
    this.handleEducationalFormChange = this.handleEducationalFormChange.bind(this)
    this.handleWorkExperienceFormChange = this.handleWorkExperienceFormChange.bind(this)
    this.addNewWorkExperience = this.addNewWorkExperience.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  
  handleBioDataFormChange(event) {
    this.setState(prevState => ({
      bioData: {...prevState.bioData, [event.target.name]: event.target.value}
    }))
  }

  handleEducationalFormChange(e, id) {
    this.setState(prevData => ({
      ...prevData,
      educationalExperience: prevData.educationalExperience.map(itm => 
        itm.id === id ? {...itm, [e.target.name]: e.target.value} : itm)}))
  }

  addNewEduExperience(event) {
    event.preventDefault();
    this.setState(prevState => ({
        educationalExperience: [...prevState.educationalExperience,
          {
            id: Math.floor(Math.random() * 100 / 2),
            schoolAttended: '',
            studyTitle: '',
            dateOfStudy: '',
          }
        ],
    }))
  }

  handleWorkExperienceFormChange(event, id) {
    this.setState(prevState => ({
      ...prevState,
      workExperience: prevState.workExperience.map(workExpItem =>
        workExpItem.id === id ? 
        {...workExpItem, [event.target.name]: event.target.value} : workExpItem
    )}))
  }

  addNewWorkExperience(event) {
    event.preventDefault();
    this.setState(prevState => ({
      workExperience: [...prevState.workExperience, 
      {
        id: Math.floor(Math.random() * 100 / 2),
        companyName: '',
        positionTitle: '',
        jobDescription: '',
        startDate: '',
        endDate: ''
      }]
    }))
  }

    
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
        ...prevState.educationalExperiences,
        educationalExperiences: this.state.educationalExperience,
        ...prevState.workExperiences,
        workExperiences: this.state.workExperience
    }))
  }

  render() {

    // const { educationalExperience } = this.state

    return (
      <main className="App">
        <section>
          <Form
            bioData={this.state.bioData}
            handleBioDataFormChange={this.handleBioDataFormChange}
            educationalExperience={this.state.educationalExperience}
            handleEducationalFormChange={this.handleEducationalFormChange}
            addNewEduExperience={this.addNewEduExperience}
            workExperience={this.state.workExperience}
            handleWorkExperienceFormChange={this.handleWorkExperienceFormChange}
            addNewWorkExperience={this.addNewWorkExperience}
            handleFormSubmit={this.handleFormSubmit}
          />
        </section>
        <section>
          <div className='profile-header'>
            {this.state.bioData.telephone && this.state.bioData.telephone}
            <h3>{this.state.bioData.firstname && this.state.bioData.firstname} {this.state.bioData.lastname && this.state.bioData.lastname}</h3>
            <span>
              <ul>
                <li>{this.state.bioData.email && this.state.bioData.email}</li></ul>            
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
