import React from 'react';

function Header({score, wins}) {
  return (
    <div>
      <div className='jumbotron'>
          <h1>Clicky Game</h1>
          <h3>Score: {score}</h3>
          <h3>Wins: {wins}</h3>
      </div>
    </div>
  );
}

export default Header;