import React from "react";

function Header({ score, wins, losses }) {
  return (
    <div className='bg-info'>
      <div className='container py-3'>
        <div className='row'>
          <div className='col-4 d-flex align-items-center'>
            <h1 className='align-bottom'>Clicky Game</h1>
          </div>
          <div className='col'></div>
          <div className='col-5 text-right'>
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
