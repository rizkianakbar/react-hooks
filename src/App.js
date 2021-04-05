import React, { useState, useRef } from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        type="text"
        value={values.name}
        name="name"
        onChange={handleChange}
        placeholder="Enter your name"
        ref={inputRef}
      />
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
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;
