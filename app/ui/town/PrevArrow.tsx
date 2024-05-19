import React from 'react'
import {BsChevronLeft} from "react-icons/bs"

const PrevArrow = ({onClick}) =>{
    return(
        <div className='absolute right-[40px] -top-[50px] hidden md:block' onClick={onClick}>
            <div className='h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
                <BsChevronLeft/>
                </div>
        </div>
        
    )
}

export default PrevArrow