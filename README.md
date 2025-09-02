### Task: Implement Login / Registration Page (React)

**Deadline:** 1 day
**Framework:** React (Vite)

---

## Flows

### Registration

1. User enters phone number.
2. OTP is sent (mocked).
3. User enters and confirms OTP.
4. User sets username and permanent password.
5. Redirect to login page or auto-login.

### Login

1. Login with username and password.
2. On success, redirect to `/dashboard`.
3. Forgot password:

   * User enters phone number/email.
   * OTP is sent (mocked) and verified.
   * User sets a new password.

---

## Repository & Commits

* **Fork the specified repo.**
* Work on a separate branch (e.g., `feature/auth-flow`).
* Commit messages must be clear and meaningful (preferably using Conventional Commits):

  * `feat(auth): add phone number step`
  * `fix(auth): handle invalid otp error`
  * `refactor(auth): extract password input component`

---

## Delivery & PR

* Create a **Pull Request**.
* Include explanations about:

  * Project architecture
  * How OTP mocking is handled
  * Post-registration behavior
* Attach screenshots or a short demo video of the implemented flows.
* Add a **README** file in the project root that includes:

  * General project description and flows implemented
  * Setup instructions (`npm install` / `npm run dev`)
  * How OTP mocking works
  * Project structure (folders & files)
  * Notes for future developers

