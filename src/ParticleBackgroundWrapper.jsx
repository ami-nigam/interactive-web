import React from 'react';
import ParticleCanvas from './HeroParticles'; // Corrected path for import from same directory

const ParticleBackgroundWrapper = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <ParticleCanvas />
      <div style={{ position: 'relative', minHeight: '100vh' }}>
      {children}
      </div>
    </div>
  );
};

export default ParticleBackgroundWrapper;
