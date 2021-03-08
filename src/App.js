import React, { useState } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [count, setCount] = useState(0);
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <div>{count}</div>
      </div>

      <input
        type="text"
        value={values.email}
        name="email"
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={values.password}
        name="password"
        onChange={handleChange}
        placeholder="Enter your password"
      />
    </div>
  );
};

export default App;
