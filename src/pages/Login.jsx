import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { auth } from "../firebase";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Try login first
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login successful!");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        try {
          // If user not found, create account
          await createUserWithEmailAndPassword(auth, email, password);
          alert("✅ Signup successful!");
        } catch (signupError) {
          alert("❌ Signup failed: " + signupError.message);
        }
      } else {
        alert("❌ Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="login-box">
      <h1>میزی</h1>
      <p>Login or Signup</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Continue</button>
      </form>

      <div className="footer">
        Aziz Ansari © 2025 <a href="#">Terms & Conditions</a>
      </div>
    </div>
  );
};

export default LoginForm;