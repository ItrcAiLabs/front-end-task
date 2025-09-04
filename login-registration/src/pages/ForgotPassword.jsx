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
        <div className="flex items-center justify-center h-[80vh]">
            <div className="aspect-[2/1] w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-2">
                
                <div className="flex items-center justify-center bg-gray-200">
                    <img
                        src="/images/forgot-password.jpg"
                        alt="Forgot Password Illustration"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="p-8 flex flex-col justify-center">
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
                            prevStep={prevStep}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
