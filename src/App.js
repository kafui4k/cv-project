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
        educationalExperiences: [],
        educationalExperience: [
          {
            id: Math.floor(Math.random() * 100 / 2),
            schoolAttended: '',
            studyTitle: '',
            dateOfStudy: '',
          }
        ],
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
    this.addNewEduExperience = this.addNewEduExperience.bind(this)
    this.handleEducationalFormChange = this.handleEducationalFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleEducationalFormChange(event, id) {
    console.log(event.target.value + id);
    
    this.setState({
     
        // return {
        //   educationalExperience: [prevState.educationalExperience.map(educateExpe => {
        //   if (educateExpe.id === id) {
        //     return {...educateExpe, [event.target.name]: event.target.value}
        //   }
        //     return educateExpe
        //   })]
        //   // educationalExperience: [...eded]
        // }
      })
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

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      workExperience: {
        ...this.state.workExperience,
        [event.target.name]: event.target.value
      }
    })
  }
    
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
        educationalExperiences: [...prevState.educationalExperiences, this.state.educationalExperience],
        workExperiences: [...prevState.workExperiences, this.state.workExperience],
    }))
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
            educationalExperience={this.state.educationalExperience}
            companyName={this.state.workExperience.companyName}
            jobDescription={this.state.workExperience.jobDescription}
            positionTitle={this.state.workExperience.positionTitle}
            startDate={this.state.workExperience.startDate}
            endDate={this.state.workExperience.endDate}
            handleFormChange={this.handleFormChange}
            addNewEduExperience={this.addNewEduExperience}
            handleEducationalFormChange={this.handleEducationalFormChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </section>
        <section>
          <PreviewForm 
            educationalExperience={this.state.educationalExperience}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            telephone={this.state.telephone}
          />
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
