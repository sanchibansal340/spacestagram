import React from 'react';
import loading from '../assets/images/loading.gif';

function Loading() {
  return (
    <main
      className="Loading text-center"
      style={{
        marginTop: '5rem',
        background: 'white',
      }}
    >
      <img
        src={loading}
        alt="Loading gif"
        className="img-fluid"
        height="300"
        width="300"
      />
      <p>Loading your way to Spacestagram ....</p>
    </main>
  );
}

export default Loading;
