'use client';
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import CardCity from './CardCity';



const SlideCity = ({options}) =>{
    const data=[
        {img: `${options[16].download_url}`, link1:"/prueba"},
        {img: `${options[17].download_url}`, link1:"/prueba2"},
        {img: `${options[18].download_url}`, link1:"/prueba"},
        {img: `${options[19].download_url}`, link1:"/prueba2"},
        {img: `${options[20].download_url}`, link1:"/prueba"},
        {img: `${options[21].download_url}`, link1:"/prueba2"},
        {img: `${options[22].download_url}`, link1:"/prueba"},                 
    ]

    const settings = {
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive:[
            {
                breakpoint: 1280,
                settings:{
                    slidesToShow: 3,
                }

            },
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings:{
                    slidesToShow: 1,
                }
            },
        ],
    };
    
    
    return(
        <div className='relative'>
            
            <Slider {...settings}>
            {data.map((el,index) => <CardCity key={index} img={el.img} link1={el.link1}/>)}
            </Slider>  
           
        </div>
    )
}

export default SlideCity