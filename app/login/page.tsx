"use client";
import Image from "next/image";
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  

  const handleChange = (e: any) =>{
    const {name, value} = e.target;
    setFormData((prevData: any) =>({
      ...prevData,
      [name]: value
    }));
  }; 

  const handleSubmit = (e: any)=>{
    e.preventDefault();
    console.log("este es el email: ", formData.email);
    console.log("este es la clave: ", formData.password);

    try {
      //To navigate to other page
      router.push('/hola');
    } catch (error) {
      console.error('Error occurred while redirecting:', error);
    }
    
    
    
  }
  return (
    <main className="bg-gradient-to-r from-purple-900 to-indigo-900">
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-0 mx-50">
    
      <h1 className="font-sans text-center text-white text-6xl font-extrabold text-4xl rounded-t-xl m-0 py-4">Login</h1>
      <form action="" onSubmit={handleSubmit} className="mt-15 flex flex-col">
        <input 
        type="email" 
        name="email" 
        placeholder="Email"
        value ={formData.email}
        onChange={handleChange}
        className="py-2 px-5 text-black text-lg font-light outline-none mt-14 rounded" />

        <input 
        type="password" 
        name="password" 
        placeholder="Password"
        value ={formData.password}
        onChange={handleChange}
        className="py-2 px-5 text-black text-lg font-light outline-none mt-10 rounded"/>
          
        <button type="submit" className="bg-blue-900 text-white font-medium py-2 px-8 transition mt-12 rounded hover:text-white"> Sign In</button>

        <h4 className="text-white text-center mt-5"> You don't have an account?</h4>
        <br/>
        <div className="flex justify-center">
          <hr className="h-px w-3/4 bg-white border-0 mt-3"/>
        </div>
        
        <button type="button" className="bg-white text-black w-full font-medium py-2 px-8 mt-9 transition mt-10 rounded hover:text-white"> Google</button>
        <button type="button" className="bg-white text-black w-full font-medium py-2 px-8 mt-7 transition mt-10 rounded hover:text-white"> Apple</button>
        
      </form>

    </div>
  </main>
  );
}
