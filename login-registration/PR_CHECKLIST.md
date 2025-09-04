# Pull Request: Implement Login / Registration Flow

## Summary
This PR implements a complete authentication flow (registration, login, and forgot password) using React (Vite) and TailwindCSS.  
All authentication data is stored in `localStorage` for simplicity, and OTP is mocked on the frontend.

---

## Checklist

### Flows Implemented
- [x] Registration: phone → OTP → credentials → redirect to login
- [x] Login with username and password → redirect to `/dashboard`
- [x] Forgot password: phone/email → OTP → reset password → old password invalidated

### Code & Repository
- [x] All work done on a feature branch (`feature/auth-flow`)
- [x] Commit messages follow Conventional Commits (e.g., `feat(auth): add phone step`)
- [x] Code structured with reusable components for each step
- [x] OTP logic mocked and handled consistently across flows

### Documentation
- [x] Added `README.md` with:
  - Project description  
  - Implemented flows  
  - Setup instructions  
  - How OTP mocking works  
  - Project structure  
  - Notes for future developers  
- [x] Explanation in PR about:
  - Project architecture  
  - How OTP mocking works  
  - Post-registration behavior  

### Demo
- [x] Attached screenshots of:
  - Registration flow  
  - Login flow  
  - Forgot password flow  

---

## Notes
- In production, replace `localStorage` with a secure backend API and real OTP delivery (SMS/Email).  
- Consider introducing a global auth state with Context API or Zustand instead of relying directly on `localStorage`.  
- UI built with TailwindCSS and can be extended with themes, dark mode, or multilingual support.
