import { useNavigate } from "react-router-dom";

export default function ResetPasswordStep({ newPassword, setNewPassword }) {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword.length < 6) {
            alert("your password should be at least 6 characters long");
            return;
        }

        console.log("Password reset successfully:", newPassword);

        navigate("/login");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-center text-gray-700">
                new password
            </h2>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    new password
                </label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="******"
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                save password
            </button>
        </form>
    )
}