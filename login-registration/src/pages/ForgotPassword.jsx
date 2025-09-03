import { useState } from "react";
import PhoneStep from "../components/auth/forgot/PhoneStep";
import OtpStep from "../components/auth/forgot/OtpStep";
import ResetPasswordStep from "../components/auth/forgot/ResetPasswordStep";

export default function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [phoneOrEmail, setPhoneOrEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [username, setUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                {step === 1 && (
                    <PhoneStep
                        phoneOrEmail={phoneOrEmail}
                        setPhoneOrEmail={setPhoneOrEmail}
                        setUsername={setUsername}
                        nextStep={nextStep}
                    />
                )}

                {step === 2 && (
                    <OtpStep
                        otp={otp}
                        setOtp={setOtp}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                )}

                {step === 3 && (
                    <ResetPasswordStep
                        username={username} 
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                    />
                )}
            </div>
        </div>
    );
}