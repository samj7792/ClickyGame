import React from 'react';

function Header({score, wins, losses}) {
  return (
    <div>
      <div className='jumbotron bg-info'>
        <div className="row">
          <div className="col-4">
            <h1>Clicky Game</h1>
          </div>
          <div className="col-4">
          </div>
          <div className="col-4 text-right">
            <h3>Score: {score}</h3>
            <h3>Wins: {wins}</h3>
            <h3>Losses: {losses}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;