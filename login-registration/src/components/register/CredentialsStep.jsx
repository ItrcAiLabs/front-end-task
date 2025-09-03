import { useNavigate } from "react-router-dom";

export default function CredentialsStep({ username, setUsername, password, setPassword }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("choose your username and password");
            return;
        }

        localStorage.setItem(
            "authUser",
            JSON.stringify({ username, password })
        );

        alert("registration was successful, now you can login");
        navigate("/login");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-center text-gray-700">
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
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                register
            </button>
        </form>
    );
}
