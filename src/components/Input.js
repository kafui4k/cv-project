import React, { Component } from 'react'

class Input extends Component {
   
  render() {
    const { type, name, placeholder, value, onChange } = this.props
    return (
        <input
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