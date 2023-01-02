import React from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const FilterByRate = ({rating, setRating}) => {
const handleChange = (value) => {
  setRating (value)
}

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={rating} />
    </span>
  )

}

export default FilterByRate