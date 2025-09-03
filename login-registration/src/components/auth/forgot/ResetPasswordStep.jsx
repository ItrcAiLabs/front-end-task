import { useNavigate } from "react-router-dom";

export default function ResetPasswordStep({ newPassword, setNewPassword }) {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword.length < 4) {
            alert("your password should be at least 4 characters long");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("authUser"));

        if (!storedUser) {
            alert("No user found. Please register first.");
            return;
        }

        const updatedUser = { ...storedUser, password: newPassword };
        localStorage.setItem("authUser", JSON.stringify(updatedUser));

        alert("Password reset successfully. You can now log in with your new password.");

        navigate("/login");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
                new password
            </h2>

            <div>
                <input
                    type="password"
                    // value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new password"
                    className="w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 hover:border-indigo-500 transition"
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