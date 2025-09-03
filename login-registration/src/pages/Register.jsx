import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneStep from "../components/register/PhoneStep";
import OtpStep from "../components/register/OtpStep";
import CredentialsStep from "../components/register/CredentialsStep";

export default function Register() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-[80vh]">
            <div className="aspect-[2/1] w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-2">
                
                <div className="flex items-center justify-center bg-gray-200">
                    <img
                        src="/images/register.jpg"
                        alt="Register Illustration"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="p-8 flex flex-col justify-center">
                    {step === 1 && (
                        <PhoneStep
                            phone={phone}
                            setPhone={setPhone}
                            onNext={() => setStep(2)}
                        />
                    )}

                    {step === 2 && (
                        <OtpStep
                            phone={phone}
                            onNext={() => setStep(3)}
                        />
                    )}

                    {step === 3 && (
                        <CredentialsStep
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                            onFinish={() => navigate("/dashboard")}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
