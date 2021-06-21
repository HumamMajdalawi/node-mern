import React, { useState } from "react";
import { useRegisterMutation } from "./generated/graphql";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await register({ variables: { email, password } });
          console.log(res);
        }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
