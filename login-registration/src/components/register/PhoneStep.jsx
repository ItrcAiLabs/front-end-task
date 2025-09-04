import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMockOtp } from "../../utils/otpMock";

export default function PhoneStep({ phone, setPhone, onNext }) {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!phone || phone.length < 10) {
            setError("Invalid phone number");
            return;
        }

        const otp = sendMockOtp(phone);
        console.log("OTP is:", otp);
        
        setError("");
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700 pb-4">
                Register
            </h2>

            <input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="09123456789"
                className="
                    w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 
                    hover:border-indigo-500 transition focus:outline-none
                "
            />

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
                    className="w-[48%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Get OTP Code
                </button>
            </div>
        </form>
    );
}
