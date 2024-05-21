import RegisterForm from './registerForm';

const RegisterPage = () => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(to bottom, #190A71 0%, #8D1AAB 100%)' }} className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center text-white mt-12">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
