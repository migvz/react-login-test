import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    const idInput=this.props.id?this.props.id:`default-id-${Math.round(Math.random()*1000)}`; 
  
    return (
      <div>
        <label htmlFor={idInput}>
          {this.props.text}
        </label>
        <input 
            type={this.props.type?this.props.type:"text"} 
            id={idInput}
            aria-required={this.props.ariaReq?this.props.ariaReq:"false"} 
            onChange={this.props.onChange}
            defaultValue={this.props.defaultValue}
        />
      </div>
    );
  }
}

export default Input
