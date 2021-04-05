import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const [count, setCount] = useState(() =>
    localStorage.getItem("count") === null
      ? 0
      : JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <div>{!data ? "Loading...." : data}</div>
      <div>count : {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button><br />
      <input
        type="text"
        value={values.name}
        name="name"
        onChange={handleChange}
        placeholder="Enter your name"
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
    </div>
  );
};

export default App;
