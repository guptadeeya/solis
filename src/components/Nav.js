import React from 'react';
import './Nav.css';
import NewNav from './NewNav';

const Nav = () => {
  return (
    <div className="Nav">
      {/* <div className="containers-wrNaver">
        <div className="container">
          Your content for the first container
          <h2>Container 1</h2>
          <p>Some content here</p>
        </div>

        <div className="container">
          Your content for the second container
          <h2>Container 2</h2>
          <p>Some content here</p>
        </div>
      </div> */}

      <NewNav />
    </div>
  );
};

export default Nav;
