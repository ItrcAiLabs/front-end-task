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
            <h2 className="text-2xl font-semibold text-center text-gray-700">
                password retrieval
            </h2>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    phone or email
                </label>
                <input
                    type="text"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder=""
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
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