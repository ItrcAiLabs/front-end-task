export default function OtpStep({ otp, setOtp, nextStep, prevStep }) {
    const correctOtp = "2048";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (otp === correctOtp) {
            console.log("OTP verified!");
            nextStep();
        } else {
            alert("Wrong code");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-center text-gray-700">
                code verification
            </h2>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    the code has been sent
                </label>
                <input 
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="2048"
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
                />
            </div>
            
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                    return
                </button>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    submit
                </button>
            </div>
        </form>
    )

}