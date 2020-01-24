import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <h1>HOME SWEET HOME</h1>
    </>
  );
};

export default Home;
