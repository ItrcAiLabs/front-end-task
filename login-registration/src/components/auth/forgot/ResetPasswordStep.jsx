import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordStep({ newPassword, setNewPassword, prevStep }) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setNewPassword("");
    }, [setNewPassword]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword.length < 4) {
            setError("your password should be at least 4 characters");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("authUser"));

        if (!storedUser) {
            setError("No user found. Please register first.");
            return;
        }

        const updatedUser = { ...storedUser, password: newPassword };
        localStorage.setItem("authUser", JSON.stringify(updatedUser));

        setSuccess("Password reset successfully! Redirecting to login...");

        setTimeout(() => {
            navigate("/login");
        }, 3000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700 pb-4">
                Set a New Password
            </h2>

            <div>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new password"
                    className="
                        w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 
                        hover:border-indigo-500 transition focus:outline-none
                    "
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {success && <p className="text-green-600 text-sm">{success}</p>}

            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={prevStep}
                    className="w-[48%] bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                    back
                </button>

                <button
                    type="submit"
                    className="w-[48%] bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                    save password
                </button>
            </div>
        </form>
    )
}