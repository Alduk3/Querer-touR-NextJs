import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  
  const handleLoginWithGoogle = () => {
    signIn("google");
  };

  const handleLoginWithApple = () => {
    signIn("apple");
  };

  let loginElem = (
    <div className="space-y-4">
      <button className="p-3 bg-blue-600 text-white font-bold rounded w-full" onClick={handleLoginWithGoogle}>
        SingUp whit Google
      </button>
      <button className="p-3 bg-black text-white font-bold rounded w-full" onClick={handleLoginWithApple}>
        SignUp with Apple
      </button>
    </div>
  );

  if (session && session.user) {
    loginElem = (
      <div className="text-center space-y-4">
        <p className="text-lg">Connected like {session.user.email}</p>
        <button className="p-3 bg-red-600 text-white font-bold rounded" onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Querer Tour</h1>
        {loginElem}
      </div>
    </div>
  );
}
