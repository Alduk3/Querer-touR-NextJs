import SlideDestinity from '../components/SlideDestinity';
import Head from 'next/head'
import React from "react";
import SlideCity from '../components/SlideCity';
import SlideTown from '../components/SlideTown';



export default async function Home() {
  const res = await fetch('https://picsum.photos/v2/list');
  const json = await res.json();

  console.log(json);
  

  return (
    <>
    <Head>
    <title>Create Next App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Generated by create next app"/>
    
    <link  rel="icon" href="/favicon.ico"/>

  </Head>
  <main>
  <h1 className="font-bold text-[32px] text-center mt-[50px] mb-[50px]">
    Our Team
  </h1>
  <h1 className="text-xl font-bold mb-2">Los destinos de la semana</h1>
  <SlideDestinity  options={json} />
  
  <h1 className="text-xl font-bold mt-[48px] mb-2">Ciudades principales</h1>
  <SlideCity options={json} />
  
  
  <h1 className="text-xl font-bold mt-[48px] mb-2">Pueblos Ocultos/Recomendados</h1>
  <SlideTown options={json}/>

    </main>
  
   
    </>
    
  );
}

