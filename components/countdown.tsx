import { useState, useEffect } from "react";

export function CountDown() {
  const totaltime = 3600;
  const [time, setTime] = useState(totaltime);
  const [hr, setHr] = useState(22);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (time === 1) {
        if (hr === 0) {
          setTime(NaN);
          clearTimeout(timer);
        } else {
          setHr(hr - 1);
          setTime(3600);
        }
      } else setTime(time - 1);
    }, 1000);
  }, [time, hr]);
  return (
    <>
      <p>
        {`${hr} `}hrs : {`${Math.floor(time / 60) || 0o0}`.padStart(2, "0")}{" "}
        mins : {`${time % 60 || 0o0}`.padStart(2, "0")} secs
      </p>
    </>
  );
}
