import './App.css'
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <h2>Task: Implement Login / Registration Page (React)</h2>
  
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        <Link to="/register">register</Link>
      </button>

      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        <Link to="/login">login</Link>
      </button>
    </>
  )
}
