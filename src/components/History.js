import React, {useState, useEffect} from 'react';

const Hisotry = props => {
  const {data} = props;
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
        <li className="list-group-item">
          Game {data.id} has started, ends in {timeToGo} sec
        </li>
      ) : (
        <li className="list-group-item">
          Game {data.id} ended, result is {data.result}
        </li>
      )}
    </>
  );
};

export default Hisotry;
