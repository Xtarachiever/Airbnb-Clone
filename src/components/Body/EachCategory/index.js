import React,{ useState} from 'react';
import Slider from 'react-slick';
import Room_1 from '../../../images/Image1.webp';
import './styles.css';
import { AiFillStar } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';

const EachCategory = () => {
    var settings = {
        dots: true,
        infinite: true,
        nextArrow: <MdKeyboardArrowRight />,
        prevArrow: <MdKeyboardArrowLeft />,
        // speed: 500,
        adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll:1,
    }
    const [like, setLike] = useState(false);
  return (
    <div className='grid_div'>
        <div className='hearts'>
            <AiFillHeart color={like ? 'red' : 'rgba(0, 0, 0, 0.5)'} stroke='white' strokeWidth="2px" onClick={()=>setLike(!like)} fontSize="25px"/> 
        </div>
        <div className='book_div'>
            <div className='flipping_book'>
                
            </div>
        </div>
        <Slider {...settings}>
           <img src={Room_1} alt="Room_1"/>
           <img src={Room_1} alt="Room_1"/>
           <img src={Room_1} alt="Room_1"/>
           <img src={Room_1} alt="Room_1"/>
        </Slider>
        <div style={{display:'flex', justifyContent:'space-between',alignItems:'start'}}>
            <div>
                <p>Sao Paulo, Brazil</p>
                <div>
                    <span>Stay with Eloy&nbsp;.&nbsp;</span>
                    <span>Enterpreneur</span>
                    <span>Aug - 8</span>
                </div>
                <p>$33 night</p>
            </div>
            <p style={{display:'flex',alignItems:'center'}}><AiFillStar/> <span>4.38</span> </p>
        </div>
    </div>
  )
}

export default EachCategory;