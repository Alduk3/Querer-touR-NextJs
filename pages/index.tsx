import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const handlerRegisterWithEmail = () => {
    router.push('/auth/register');
  };

  const handleLoginWithGoogle = () => {
    signIn("google");
  };

  const handleLoginWithApple = () => {
    signIn("apple");
  };

  const redirectToLogin = () => {
    router.push('/login');
  };

  let loginElem = (
    <div className="space-y-4 flex flex-col items-center">
      <button 
        className="w-80 h-16 bg-gray-300 text-black font-bold rounded-full hover:bg-gray-400" 
        onClick={handlerRegisterWithEmail}>
        Email
      </button>
      <button 
        className="w-80 h-16 bg-gray-300 text-black font-bold rounded-full hover:bg-blue-600 hover:text-white" 
        onClick={handleLoginWithGoogle}>
        Google
      </button>
      <button 
        className="w-80 h-16 bg-gray-300 text-black font-bold rounded-full hover:bg-black hover:text-white" 
        onClick={handleLoginWithApple}>
        Apple
      </button>
    </div>
  );

  if (session && session.user) {
    loginElem = (
      <div className="text-center space-y-4">
        <p className="text-lg text-white">Connected as {session.user.email}</p>
        <button 
          className="w-80 h-16 bg-red-600 text-white font-bold rounded-full" 
          onClick={() => signOut()}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 h-screen w-full bg-transparent">
      <h1 className="text-4xl font-extrabold leading-10 text-white">Choose Account</h1>
      {loginElem}
      <div className="text-center mt-4">
        <p className="text-white">
          Do you have an account?{' '}
          <span 
            className="underline cursor-pointer" 
            onClick={redirectToLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
