import React from 'react'
import Link from 'next/link'

const CardTown = ({ img, link1 }) => {
    console.log("esto es link", link1);
    return (
        <div className='w-[100%]'>

            <div>
                <Link href={link1}>
                    <div className="container">
                        <div>
                        </div>
                        <div className="mt-1 max-w-sm mx-auto">
                            <div className="relative group">
                                <img
                                    src={img}
                                    alt="Photo by Sébastien Goldberg on Unsplash" className="w-[300px] h-[350px] rounded shadow-xl hover:shadow-2xl" />
                                <div
                                    className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                                </div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h1 className="text-white font-bold text-lg">Be careful on the way.</h1>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                    <div className="flex-row text-center">
                                        <h1 className="text-gray-50 font-bold text-lg">Be careful on the way.</h1>
                                        <p className="text-gray-200 font-medium text-sm">Tulus</p>
                                        <small className="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Link>

                {/* <div className='flex flex-col gap-4 p-[20px]'>
                <div>
                    <h2 className='font-bold'>Team member Name</h2>
                </div>
                <div>
                    <p>Lorem ipsum lksajdflsdjflsjfsdfj</p>
                </div>
                
            </div> */}

            </div>
        </div>
    )
}

export default CardTown