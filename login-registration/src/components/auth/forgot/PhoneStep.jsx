export default function PhoneStep({ phoneOrEmail, setPhoneOrEmail, nextStep }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!phoneOrEmail) {
            alert("please enter your phone number or email");
            return;
        }

        console.log("OTP sent to:", phoneOrEmail);
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-3xl font-semibold text-center text-gray-700">
                Reset Password
            </h2>

            <div>
                <input
                    type="text"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="Phone or Email"
                    className="w-full border-[0.16vw] border-sky-500 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring focus:ring-blue-400 hover:border-indigo-500 transition"
                />

            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                send verification code
            </button>
        </form>
    )
}