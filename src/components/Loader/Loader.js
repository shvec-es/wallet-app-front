import { TailSpin } from 'react-loader-spinner';
import React from 'react';

const Spinner = props => {
  const spinnerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <div style={spinnerStyle}>
      <TailSpin
        ariaLabel="loading-indicator"
        color="var(--color-primary)"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Spinner;
