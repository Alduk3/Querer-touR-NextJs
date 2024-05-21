import React from 'react'
import { BsChevronRight } from "react-icons/bs"


const NextArrow = ({ onClick }) => {
    return (
        <div className='absolute right-0 -top-[50px]' onClick={onClick}>
            <div className='h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
                <BsChevronRight />
            </div>
        </div>

    )
}

export default NextArrow