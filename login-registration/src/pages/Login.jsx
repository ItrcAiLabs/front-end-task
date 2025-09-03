import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || password) {
            setError("enter your username and password");
            return;
        }

        console.log("Login attempt:", { username, password });

        setError("");
        navigate("/dashboard");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center text-gray-700">
                        login
                    </h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="username"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="******"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        login
                    </button>

                    <p className="text-sm text-center text-gray-500 mt-2">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">
                            forgot password?
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}