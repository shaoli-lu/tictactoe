import React from 'react';

export default function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>How to Play Tic-Tac-Toe</h2>
        <div className="help-steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>The game is played on a grid that's 3 squares by 3 squares.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>You are <strong>X</strong>, your friend (or the other player) is <strong>O</strong>. Players take turns putting their marks in empty squares.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
          </div>
        </div>
        <button onClick={onClose} className="close-button">Got it!</button>
      </div>
    </div>
  );
}
