import React from 'react';
import {Form} from 'react-bootstrap';
import './FilterByName.css';

const FilterByName = ({inputSearch , setInputSearch}) => {
  return (
    <div className= 'input'>
        <Form.Control type="text" placeholder="Enter movie title" value ={inputSearch} onChange = {(e) => setInputSearch (e.target.value)}/>
    </div>
  )
}

export default FilterByName