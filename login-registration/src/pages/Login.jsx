import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserIcon, PasswordIcon } from '../components/ui/icon';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("authUser"));

        if (!storedUser) {
            setError("there is no users yet. please register first.");
            return;
        }

        if (storedUser.username === username && storedUser.password === password) {
            setError("");
            navigate("/dashboard");
        } else {
            setError("wrong username or password");
        }
    };

    return (
        <div className="flex items-center justify-center h-[80vh]">
            <div className="aspect-[2/1] w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-2">
                
                <div className="flex items-center justify-center bg-gray-200">
                    <img
                        src="/images/login.jpg"
                        alt="Login Illustration"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="p-8 flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-center text-gray-700 pb-4">
                            Log in
                        </h2>

                        <div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                className="
                                    w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 
                                    hover:border-indigo-500 transition
                                "
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="
                                    w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 
                                    hover:border-indigo-500 transition
                                "
                            />
                            
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="w-[48%] bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                            >
                                back
                            </button>
                            <button
                                type="submit"
                                className="
                                    w-[48%] bg-sky-500 text-white py-2 rounded-lg  
                                    transition duration-400 hover:bg-sky-600
                                "
                            >
                                Log in
                            </button>
                        </div>

                        <p className="text-sm text-center text-sky-500 mt-2">
                            <Link to="/forgot-password" className="text-base text-sky-500 hover:text-indigo-500 transition">
                                Forgot password?
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
