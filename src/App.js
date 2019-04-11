import React from 'react';
import styles from './style.css';
import Board from './Board';

const initialState = {
  board: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ],
  nextTurn: 'black',
  winner: null,
};

const App = () => {
  return (
    <div>
      <h1 className={styles.heading}>
        Connect Four
      </h1>
      <Board board={initialState.board} onDrop={column => { console.log(`dropped in column: ${column + 1}`); }} />
    </div>
  );
};

export default App;
