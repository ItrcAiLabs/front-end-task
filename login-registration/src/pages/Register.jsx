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
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
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
    );
}
