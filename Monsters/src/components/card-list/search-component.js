import React from 'react';
import './search-component-styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className = 'search'
        type = 'search' 
        // placeholder = 'search your monsters' 
        placeholder = {placeholder}
        // onChange ={e => {this.setState({searchField:e.target.value}, () => console.log(this.state))}} />
        // onchange event should be dynamic hence it is sent through props
        onChange = {handleChange} />
        // onChange = {e => this.setState({searchField: e.target.value})}/>
)