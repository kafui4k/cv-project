import React, { Component } from 'react'

class Practical extends Component {
  render() {
    return (
        <section>
            <form>
                <h1 className='pinfo___title'>Practical Experience</h1>
                <label htmlFor='companyname'>Company Name</label>
                <input type='text' name='companyname' placeholder='e.g: John Doe ent.' />
                <label htmlFor='positiontitle'>Position Title</label>
                <input type='text' name='positiontitle' placeholder='e.g: Senior Engineer' />
                <label htmlFor='job_role'>Job/Role Description</label>
                <textarea name='job_role' placeholder='e.g: A lot of stuff'></textarea>
                <label htmlFor='startdate'>Start Date</label>
                <input type='date' name='startdate' />
                <label htmlFor='enddate'>End Date</label>
                <input type='date' name='enddate' />
            </form>
      </section>
    )
  }
}

export default Practical