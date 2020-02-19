/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

const Hisotry = (props) => {
  const { data } = props;
  const [timeToGo, setTimeToGo] = useState(Math.abs(data.startDelta));

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeToGo <= 0) {
        clearInterval(interval);
      }
      setTimeToGo(state => state - 1);
    }, 1000);
  }, []);

  return (
    <>
      {timeToGo >= 0 ? (
        <p>
          Game {data.id} has started, ends in {timeToGo}
        </p>
      ) : (
        <p>
          Game {data.id} ended, result is {data.result} seconds
        </p>
      )}
    </>
  );
};

export default Hisotry;
