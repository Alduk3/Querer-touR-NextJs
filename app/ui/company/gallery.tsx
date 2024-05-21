'use client'

import Image from 'next/image'
// import { useState } from 'react'

import { CiWifiOn } from "react-icons/ci";
import { CiParking1 } from "react-icons/ci";
import { TbCoffee } from "react-icons/tb";
import { PiForkKnifeLight } from "react-icons/pi";
import { TbBuildingChurch } from "react-icons/tb";

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function GalleryGrid() {

    return (

        // flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12
        // mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

                {/* Imágenes */}
                <Image
                    src="/isabelParrilla4.jpg"
                    alt="Image of the company"
                    width={400}
                    height={1200}
                    className='sm:grid-cols-2 flex items-center'
                />

                <Image
                    src="/isabelParrilla4.jpg"
                    alt="Image of the company"
                    width={400}
                    height={900}
                    className='sm:grid-cols-2 flex items-center'
                />

                <Image
                    src="/isabelParrilla4.jpg"
                    alt="Image of the company"
                    width={400}
                    height={900}
                    className='sm:grid-cols-2 flex items-center'
                />



                {/* Texto */}
                <div className="col-span-2.5 gap-4 mt-4 p-4">
                    <p className="text-lg">
                        "Un lugar con magia, color y naturaleza, a 700 mts del parque de Jardín y especial para la tranquilidad y el descanso"
                    </p>
                </div>

                {/* Iconos de servicios */}
                <div className="col-span-2.8 flex justify-around items-center mt-4">
                    <button className="flex items-center border border-[#000000] rounded py-1 px-2 m-6">
                        <CiWifiOn className="h-6 mr-2" />
                        Wifi
                    </button>

                    <button className="flex items-center border border-[#000000] rounded py-1 px-2 m-6">
                        <CiParking1 className="h-6 mr-2" />
                        Parqueadero
                    </button>

                    <button className="flex items-center border border-[#000000] rounded py-1 px-2 m-6">
                        <TbCoffee className="h-6 mr-2" />
                        Desayuno
                    </button>

                    <button className="flex items-center border border-[#000000] rounded py-1 px-2 m-6">
                        <PiForkKnifeLight className="h-6 mr-2" />
                        Almuerzo
                    </button>

                    <button className="flex items-center border border-[#000000] rounded py-1 px-2 m-6">
                        <TbBuildingChurch className="h-6 mr-2" />
                        Capilla
                    </button>


                </div>



                {/* <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}

                {/* Texto */}
                {/* <div className="col-span-3 mt-4">
                            <p className="text-lg">
                                "Un lugar con magia, color y naturaleza, a 700 mts del parque de Jardín y especial para la tranquilidad y el descanso"
                            </p>
                        </div> */}

                {/* Iconos de servicios */}
                {/* <div className="col-span-3 flex justify-around items-center mt-4">
                            <span className="flex items-center">
                                <img src="" alt="WiFi" className="h-6 mr-2" />
                                WiFi
                            </span>
                            <span className="flex items-center">
                                <img src="" alt="Parqueadero" className="h-6 mr-2" />
                                Parqueadero
                            </span>
                            <span className="flex items-center">
                                <img src="" alt="Desayuno" className="h-6 mr-2" />
                                Desayuno
                            </span>
                            <span className="flex items-center">
                                <img src="" alt="Capilla" className="h-6 mr-2" />
                                Capilla
                            </span>
                        </div>
                */}
                {/* 
                            </div>
                        </div> */}


            </div >
        </div >
    );
}

