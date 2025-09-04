import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneStep({ phoneOrEmail, setPhoneOrEmail, nextStep }) {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!phoneOrEmail) {
            setError("please enter your phone number or email");
            return;
        }

        console.log("OTP sent to:", phoneOrEmail);
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700 pb-4">
                Reset Password
            </h2>

            <div>
                <input
                    type="text"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="Phone or Email"
                    className="w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring focus:ring-blue-400 hover:border-indigo-500 transition"
                />

            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="w-[48%] bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                    back
                </button>
                <button
                    type="submit"
                    className="w-[48%] bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    send otp
                </button>
            </div>
        </form>
    )
}