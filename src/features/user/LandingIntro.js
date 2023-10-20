import React from "react";

function LandingIntro() {
  const introStyle = {
    backgroundImage: `url('/Left side.png')`, // Set the background image
    backgroundSize: 'cover',
    position: 'relative',
  };

  const containerStyle = {
    backgroundColor: '#F8FAFF', // Set the background color of the entire page
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Ensure full viewport height
  };

  const heroStyle = {
    backgroundColor: 'rgba(248, 250, 255, 0.8)', // Set the background color of the hero section with transparency
    position: 'relative',
    width: '100%', // Take up the full width of the viewport
    height: '100%', // Take up the full height of the viewport
  };

  const contentStyle = {
    color: '#FFFFFF', // White text color
  };

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '29px',
    letterSpacing: '0.015em',
    textAlign: 'left',
    color: '#FFFFFF', // White text color
  };

  const boardStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Montserrat',
    fontSize: '72px',
    fontWeight: '700',
    lineHeight: '88px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#FFFFFF', // White text color
  };

  const imageStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200px',
  };

  return (
    <div style={containerStyle}>
      <div className="hero rounded-l-xl" style={{ ...introStyle, ...heroStyle }}>
        <div className="hero-content py-12" style={contentStyle}>
          <h1 style={logoStyle}>LOGO</h1>
          <h2 style={boardStyle}>Board.</h2>
        </div>
        <img src="/icons.png" alt="Image" style={imageStyle} />
      </div>
    </div>
  );
}

export default LandingIntro;
