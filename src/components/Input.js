import React, { Component } from 'react'

class Input extends Component {
   
  render() {
    const { id, type, name, placeholder, value, onChange } = this.props
    return (
        <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
  }
}

export default Input