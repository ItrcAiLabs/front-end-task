import { useState } from "react";

export default function OtpStep({ phone, onNext }) {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (otp !== "2048") {
            setError("Invalid otp code");
            return;
        }
        
        setError("");
        onNext();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-3xl font-semibold text-center text-gray-700 pb-4">
                OTP Verification
            </h2>
            <p className="text-center text-sm text-gray-600">
                OTP code has been sent to <span className="font-medium">{phone}</span>
            </p>

            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="2048"
                className="w-full border border-sky-500 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring focus:ring-blue-400"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Verify
            </button>
        </form>
    )
}
