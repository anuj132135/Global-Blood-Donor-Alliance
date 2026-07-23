import { useEffect, useState } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.ceil(target / 100);

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <>
      <h1>{count.toLocaleString()}+</h1>
    </>
  );
}

export default Counter;
