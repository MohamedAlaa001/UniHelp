import { useState, useEffect } from 'react';

const AlertProgressBar = ({ timeout }) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (progressValue < 100) {
      setTimeout(() => {
        setProgressValue((progressValue) => progressValue + 1);
      }, timeout / 200);
    }
  }, [progressValue, timeout]);

  return (
    <div
      className='progress-bar'
      role='progressbar'
      style={{
        width: `${progressValue}%`,
        height: '3px',
        background: 'var(--color-dark)',
      }}
    ></div>
  );
};

export default AlertProgressBar;
