import React, { Component } from 'react'

class Educational extends Component {
  render() {
    return (
        <section className=''>
            <form>
                <h1 className='pinfo___title'>Educational Experience</h1>
                <label htmlFor='school'>School Attended</label>
                <input type='text' name='school' placeholder='e.g: School of Hardknocks' />
                <label htmlFor='studytitle'>Title of Study</label>
                <input type='text' name='studytitle' placeholder='e.g: BSC Computer Science' />
                <label htmlFor='dateofstudy'>Date of Study</label>
                <input type='date' name='dateofstudy' />
            </form>
        </section>
    )
  }
}

export default Educational