"use client";
import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    idType: 'PP',
    numberId:'',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Enviar los datos relevantes a la API de NestJS
      const registerResponse = await axios.post('http://localhost:3010/v1/auth/register', {
        email: formData.email,
        password: formData.password,
        role: 'USER',
      });

      const { email, role, uuid } = registerResponse.data;

       // Unir los datos de la respuesta con el resto del formulario
      const completeData = {
        ...formData,
        email,
        role,
        uuid,
      };

      // Enviar los datos completos a la API de Spring Boot
      // const springBootResponse = await axios.post('http://localhost:8080/api/users', completeData);
      // console.log('Registro completo y enviado a Spring Boot', springBootResponse.data);
      // setError(null); // Limpiar mensaje de error


    } catch (error) {
      console.error('Error en el registro', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    
    <div className=' flex items-center justify-center bg-gradient-to-br'>
    <form onSubmit={handleSubmit} className="p-8 rounded-lg max-w-xl w-full space-y-4 bg-transparent font-bold">
      <div className="grid grid-cols-2 gap-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="p-2 border border-gray-300 rounded-md" required />
      <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last name" className="p-3 border border-gray-300 rounded-md" required />
      </div>
      <div className="flex space-x-4">
            <select className="w-1/3 mb-4 p-3 border rounded text-gray-600">
                <option value="PP">Passport</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="CC">Cédula de Ciudadania</option>
            </select>
      <input type="text" name="numberId" value={formData.numberId} onChange={handleChange} placeholder="Number" className="block w-full mb-4 p-3 border rounded" required />
      </div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md" required />
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full p-3 border border-gray-300 rounded-md" required />
      <p className="text- text-gray-500">Terms and conditions</p>
      <button type="submit" className="w-full bg-blue-800 text-white p-2 rounded-md font-bold">REGISTER</button>
    </form>
    </div>
  );
};

export default RegisterForm;
