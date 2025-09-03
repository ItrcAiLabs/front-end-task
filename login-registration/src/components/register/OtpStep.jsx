import { useState, useEffect } from "react";

export default function OtpStep({ phone, onNext }) {
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [error, setError] = useState("");
    const [timeLeft, setTimeLeft] = useState(60); 
    const [canResend, setCanResend] = useState(false);

    const generateOtp = () => {
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(newOtp);
        setTimeLeft(60);
        setCanResend(false);
        console.log("Generated OTP:", newOtp);
    };

    useEffect(() => {
        generateOtp();
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) {
            setCanResend(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (otp !== generatedOtp) {
            setError("Invalid OTP code");
            return;
        }

        if (timeLeft <= 0) {
            setError("OTP expired. Please request a new one.");
            return;
        }

        setError("");
        onNext();
    };

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
                placeholder="Enter OTP"
                className="w-full border border-sky-500 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring focus:ring-blue-400"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
                disabled={timeLeft <= 0}
            >
                Verify
            </button>

            <div className="text-center text-sm text-gray-600">
                {canResend ? (
                    <button
                        type="button"
                        onClick={generateOtp}
                        className="text-base font-semibold text-blue-500 hover:text-blue-600 transition"
                    >
                        Resend OTP
                    </button>
                ) : (
                    <p className="text-base font-semibold">OTP expires in {timeLeft}s</p>
                )}
            </div>
        </form>
    );
}
