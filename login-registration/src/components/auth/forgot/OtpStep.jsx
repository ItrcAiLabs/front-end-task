import { useState, useEffect } from "react";

export default function OtpStep({ otp, setOtp, nextStep, prevStep }) {
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const [error, setError] = useState("");

    const generateOtp = () => {
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(newOtp);
        setTimeLeft(60);
        setCanResend(false);
        console.log("Generated OTP (forgot password):", newOtp); 
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
            setError("Wrong or expired code");
            return;
        }

        if (timeLeft <= 0) {
            setError("OTP expired. Please request a new one.");
            return;
        }

        console.log("OTP verified!");
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700 pb-4">
                Code Verification
            </h2>

            <div>
                <input 
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="
                        w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 
                        hover:border-indigo-500 transition focus:outline-none
                    "
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

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
                    disabled={timeLeft <= 0}
                    className="w-[48%] bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                >
                    Submit
                </button>
            </div>
            
            <div className="text-center text-sky-500 transition">
                {canResend ? (
                    <button
                        type="button"
                        onClick={generateOtp}
                    >
                        Resend OTP
                    </button>
                ) : (
                    <p>OTP expires in {timeLeft}s</p>
                )}
            </div>
        </form>
    );
}