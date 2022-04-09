import React from 'react';

const Homepage = () => {
  return (
    <>
      <div className={'container'}>
        <div className={'flex'}>
          <img alt="" src="react-icon.png" className={'react-logo'} />
          <div style={{ padding: '10px 0px' }} className={'flex'}>
            <span
              style={{
                color: 'white',
                fontSize: '36px',
              }}
            >
              edit src/app.jsx
            </span>
            <span
              style={{
                color: 'white',
                fontSize: '18px',
                padding: '5px 0px',
                textTransform: 'lowercase',
              }}
            >
              Created by <span style={{ fontWeight: 700 }}>Saddam</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
