import React, { useState, useEffect } from 'react';

function RealTimeDate() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup function to stop timer on unmount
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='flex flex-col items-center top-40 absolute'>
      <span className='text-white text-7xl font-extrabold'>{formattedTime}</span>
      <span className='text-white text-2xl'>{formattedDate}</span> 
    </div>
  );
}

export default RealTimeDate;
