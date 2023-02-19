import React from 'react'
import './category.css'
import {category} from '../../assets/data/data'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {MdNavigateNext} from 'react-icons/md'
import {MdNavigateBefore} from 'react-icons/md'

  const SampleNextArrow = (props) =>{
    const {onClick} = props
    return (
        <div className="control-btn" onClick = {onClick}>
            <button className='next'>
                <MdNavigateNext className='icon' />
            </button>
        </div>
    )
  }

  const SamplePrevArrow = (props) =>{
    const {onClick} = props
    return (
        <div className="control-btn" onClick = {onClick}>
            <button className='prev'>
                <MdNavigateBefore className='icon' />
            </button>
        </div>
    )
  }




export default function Category(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              
          ]
      };

    return (
        <>
            <section className='category'>
                <div className="content">
                <Slider {...settings}>
                    {category.map((item) =>(
                        <div className="boxes" key={item.id}>
                            <div className="box">
                                <img src={item.cover} alt="" />
                           
                            <div className="overlay">
                                <h4>{item.category}</h4>
                                <p>{item.title}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </section>
           
        </>
    )
    
}