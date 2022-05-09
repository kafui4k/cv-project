import React, { Component } from 'react'

class TextArea extends Component {
  render() {

    const { name, placeholder, value, onChange } = this.props

    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}></textarea>
    )
  }
}

export default TextArea