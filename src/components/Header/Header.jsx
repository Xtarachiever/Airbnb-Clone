import React from 'react';
import FilterIcon from '../../images/FilterIcon';
import { BiSearch } from 'react-icons/bi'
import './styles.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='search'>
          <div className='inputBox'>
            <input type="text" readOnly/>
            <div className='filter_div'>
              <FilterIcon />
            </div>
            <div className='searchIcon_div'>
              <BiSearch fontSize="20px"/>
            </div>
            <div className='text'>
              <p style={{fontWeight:'bold'}}>Anywhere</p>
              <p>Any week . Add guests</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header