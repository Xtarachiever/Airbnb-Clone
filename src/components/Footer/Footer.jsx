import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import PersonIcon from '../../images/PersonIcon';
import './styles.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <BiSearch fontSize="20px"/>
        </div>
        <div >
            <AiOutlineHeart fontSize="20px"/>
        </div>
        <PersonIcon />
    </div>
  )
}

export default Footer;