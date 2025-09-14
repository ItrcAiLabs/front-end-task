# Login / Registration Project

---

## Project Description

This project is a Login / Registration flow implemented with React (Vite) and TailwindCSS.  
It includes the following features:
- Registration with phone number, OTP verification, and credentials setup.  
- Login with username and password.  
- Forgot Password flow with OTP verification and password reset.  
- Mocking of OTP for demonstration purposes.  
- LocalStorage-based user persistence for simplicity (no backend).  

---

## Flows Implemented

### Registration
1. User enters phone number.  
2. OTP is generated and displayed (mock).  
3. User enters OTP and confirms.  
4. User sets username and permanent password.  
5. User is redirected to the login page.  

### Login
1. User logs in with username and password.  
2. On success, user is redirected to `/dashboard`.  
3. Invalid credentials are rejected.  

### Forgot Password
1. User enters phone number/email.  
2. OTP is sent (mocked) and verified.  
3. User sets a new password.  
4. The old password becomes invalid immediately.  

---

## Setup Instructions

Clone the repository and install dependencies:
```bash
git clone <your-fork-url>
cd login-registration
npm install
npm run dev
```

---

## How OTP Mocking Works

- OTP is generated as a 4-digit random number on the frontend.
- Instead of sending the OTP via SMS or Email, it is displayed in the UI for demonstration purposes.
- The OTP is valid only for a limited time (60 seconds).
- After expiration, the user must request a new OTP by clicking the "Resend OTP" button.

---

## Project Structure (folders & files)

```bash
src/
  components/
    auth/
      forgot/
        PhoneStep.jsx          # Enter phone/email
        OtpStep.jsx            # Enter and verify OTP
        ResetPasswordStep.jsx  # Set new password
    register/
        PhoneStep.jsx          # Enter phone number
        OtpStep.jsx            # Enter and confirm OTP
        CredentialsStep.jsx    # Create username & password
    ui/
        icon.jsx               # Project icons
  pages/
    Login.jsx                  # Login page
    Register.jsx               # Registration page
    ForgotPassword.jsx         # Forgot password page
    Dashboard.jsx              # User dashboard
  App.jsx
  main.jsx
```

---

## Notes for Future Developers

- All authentication data is stored in `localStorage`. For production, replace with a secure backend API.
- Consider using Context API, Redux, or Zustand instead of localStorage for more reliable state management.
- OTP delivery should be implemented through an SMS or Email service provider in real-world usage.
- UI is built with TailwindCSS and can be customized easily for branding or themes.
- Multi-language support can be added with an i18n solution such as `react-i18next`.
