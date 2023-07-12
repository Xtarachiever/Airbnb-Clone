import React from 'react';
import Amazing_Pool from '../../images/AmazingPools.jpg';
import Amazing_View from '../../images/AmazingView.jpg';
import Beach_Front from '../../images/BeachFront.jpg';
import Boats from '../../images/Boats.jpg';
import BreakFast from '../../images/Breakfast.jpg';
import Burning from '../../images/Burning.jpg';
import Chef from '../../images/Chef.jpg';
import OMG from '../../images/OMG.jpg';
import CountrySide from '../../images/CountrySide.jpg';
import Play from '../../images/Play.jpg';
import Rooms from '../../images/Rooms.jpg';
import Mansion from '../../images/Mansions.jpg';
import Cities from '../../images/Iconic Cities.jpg';
import Design from '../../images/Design.jpg';
import Desert from '../../images/Desert.jpg';
import Domes from '../../images/Domes.jpg';
import Earth_Homes from '../../images/Earth Homes.jpg';
import Island from '../../images/Island.jpg';
import './styles.css';
import Slider from 'react-slick';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

const Filter = () => {
    var settings = {
        dots: false,
        infinite: true,
        nextArrow: <IoIosArrowDropright />,
        prevArrow: <IoIosArrowDropleft />,
        // speed: 500,
        adaptiveHeight:true,
        slidesToShow: 14,
        slidesToScroll:3,
        responsive:[
            {
                breakpoint:1120,
                settings:{
                    slidesToShow: 9,
                }
            },
            {
                breakpoint:700,
                settings:{
                    slidesToShow: 6,
                }
            },
            {
                breakpoint:450,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint:300,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:240,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
      };
  return (
    <div className='filter_nav'>
        <Slider {...settings}>
            <div className='filter'>
                <img src={Burning} alt='Trending'/>
                <p>Trending</p>
            </div>
            <div className='filter'>
                <img src={Amazing_View} alt='Amazing_View'/>
                <p>Amazing View</p>
            </div>
            <div className='filter'>
                <img src={OMG} alt='OMG'/>
                <p>OMG</p>
            </div>
            <div className='filter'>
                <img src={CountrySide} alt='CountrySide'/>
                <p>Country Side</p>
            </div>
            <div className='filter'>
                <img src={Play} alt='Play'/>
                <p>Play</p>
            </div>
            <div className='filter'>
                <img src={Rooms} alt='Rooms'/>
                <p>Rooms</p>
            </div>
            <div className='filter'>
                <img src={Amazing_Pool} alt='Amazing_Pool'/>
                <p>Amazing Pool</p>
            </div>
            <div className='filter'>
                <img src={Mansion} alt='Amazing_Pool'/>
                <p>Mansion</p>
            </div>
            <div className='filter'>
                <img src={Cities} alt='Cities'/>
                <p>Cities</p>
            </div>
            <div className='filter'>
                <img src={Design} alt='Design'/>
                <p>Design</p>
            </div>
            <div className='filter'>
                <img src={BreakFast} alt='Bed and Breakfast'/>
                <p>Bed and Breakfast</p>
            </div>
            <div className='filter'>
                <img src={Domes} alt='Domes'/>
                <p>Domes</p>
            </div>
            <div className='filter'>
                <img src={Boats} alt='Boats'/>
                <p>Boats</p>
            </div>
            <div className='filter'>
                <img src={Chef} alt='Chef'/>
                <p>Chef</p>
            </div>
            <div className='filter'>
                <img src={Desert} alt='Desert'/>
                <p>Desert</p>
            </div>
            <div className='filter'>
                <img src={Earth_Homes} alt='Earth_Homes'/>
                <p>Earth Homes</p>
            </div>
            <div className='filter'>
                <img src={Beach_Front} alt='Beach_Front'/>
                <p>Beach Front</p>
            </div>
            <div className='filter'>
                <img src={Island} alt='Island'/>
                <p>Island</p>
            </div>
        </Slider>
    </div>
  )
}

export default Filter