"use client";
import { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';

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

  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendVerificationCode = async () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // Generar un código de 6 dígitos
    setGeneratedCode(code);

    const templateParams = {
      to_email: formData.email,
      verification_code: code,
    };

    emailjs.send('service_1q1w90e', 'template_s7pknud', templateParams, 'HKr6q99bkPyHnYexp')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsModalOpen(true); // Abrir el modal después de enviar el email
      }, (error) => {
        console.error('Failed to send email', error);
      });
  };

  const handleVerification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (verificationCode === generatedCode) {
      handleRegister();
    } else {
      setError('Incorrect verification code');
    }
  };

  const handleRegister = async () => {
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
      const springBootResponse = await axios.post('http://localhost:8080/api/users', completeData);
      console.log('Registro completo y enviado a Spring Boot', springBootResponse.data);
      setError(null); // Limpiar mensaje de error
    } catch (error) {
      console.error('Error en el registro', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendVerificationCode();
  };

  return (
    <div className='flex items-center justify-center bg-gradient-to-br'>
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
      
      <Modal
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)}
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-6 shadow-lg"
  overlayClassName="fixed inset-0 bg-black opacity-50"
>
  <form onSubmit={handleVerification}>
    <h2 className="text-xl font-semibold mb-4">Enter Verification Code</h2>
    <input
      type="text"
      value={verificationCode}
      onChange={(e) => setVerificationCode(e.target.value)}
      className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
      placeholder="Verification Code"
      required
    />
    {error && <p className="text-red-500">{error}</p>}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
    >
      Verify
    </button>
  </form>
</Modal>

    </div>
  );
};

export default RegisterForm;

