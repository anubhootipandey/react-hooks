import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it runs only once after the initial render

  return <p>Timer: {seconds} seconds</p>;
};

export default Timer;
