import { useState } from "react";

export default function CredentialsStep({ onFinish }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("please enter your username and password");
            return;
        }

        console.log("Registered with:", { username, password });

        setError("");
        onFinish();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
                choose username and password
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
                register
            </button>
        </form>
    )
}