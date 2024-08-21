import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
