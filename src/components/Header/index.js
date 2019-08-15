import React from 'react';

function Header({score}) {
  return (
    <div>
      <div className='jumbotron'>
          <h1>Clicky Game</h1>
          <h3>{score}</h3>
      </div>
    </div>
  );
}

export default Header;