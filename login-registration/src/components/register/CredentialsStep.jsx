import { useNavigate } from "react-router-dom";

export default function CredentialsStep({ username, setUsername, password, setPassword }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            alert("Choose your username and password");
            return;
        }

        localStorage.setItem(
            "authUser",
            JSON.stringify({ username, password })
        );

        alert("Registration was successful, now you can login");
        navigate("/login");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700 pb-4">
                Choose username and password
            </h2>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                autoComplete="off" 
                className="w-full border border-sky-500 rounded-lg p-2 text-gray-900"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border border-sky-500 rounded-lg p-2 text-gray-900"
            />

            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                Register
            </button>
        </form>
    );
}
