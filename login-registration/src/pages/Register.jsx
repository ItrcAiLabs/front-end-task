import { useState } from "react";
import PhoneStep from "../components/register/PhoneStep";

export default function Register() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");

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
                {step !== 1 && (
                    <div className="text-center text-gray-500">
                        <p>Step {step} (coming soon)</p>
                    </div>
                )}
            </div>
        </div>
    )
}

// export default function Register() {
//     return (
//         <>
//             <h1>Register Page</h1>
//         </>
//     )
// }