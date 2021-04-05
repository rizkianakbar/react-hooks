import React, { useState, useRef } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useMeasure } from "./useMeasure";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

  const [rect, inputRef2] = useMeasure([]);

  return (
    <div>
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
        ref={inputRef2}
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
