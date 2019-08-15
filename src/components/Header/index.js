import React from 'react';

function Header({score, wins, losses}) {
  return (
    <div>
      <div className='jumbotron'>
          <h1>Clicky Game</h1>
          <h3>Score: {score}</h3>
          <h3>Wins: {wins}</h3>
          <h3>Losses: {losses}</h3>
      </div>
    </div>
  );
}

export default Header;