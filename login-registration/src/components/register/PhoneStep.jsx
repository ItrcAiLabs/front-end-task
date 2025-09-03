import { useState } from "react";
import { sendMockOtp } from "../../utils/otpMock";

export default function PhoneStep({ phone, setPhone, onNext }) {
    const [error, setError] = useState("");

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
            <h2 className="text-2xl font-semibold text-center text-gray-700">
                Register
            </h2>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Phone number
                </label>
                <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="09123456789"
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                get otp code
            </button>
        </form>
    )
}