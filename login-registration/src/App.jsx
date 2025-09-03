import './App.css'
import { Link } from "react-router-dom";
import { LoginIcon, RegisterIcon } from './components/ui/icon';

export default function App() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="aspect-[2/1] w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-2">
        
        <div className="flex items-center justify-center bg-gray-200">
          <img
            src="/images/home.jpg"
            alt="Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-700 pb-4">
            Welcome
          </h2>

          <Link
            to="/register"
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            <RegisterIcon size={22} strokeWidth={1} />
            Register
          </Link>

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition"
          >
            <LoginIcon size={22} strokeWidth={1} />
            Login
          </Link>
        </div>

      </div>
    </div>
  )
}
