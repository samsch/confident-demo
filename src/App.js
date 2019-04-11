import React from 'react';
import set from 'ramda/src/set';
import lensPath from 'ramda/src/lensPath';
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

const dropPieceInBoard = (board, column, color) => {
  const rowDropPoint = board[column].findIndex(value => value === null);
  if (rowDropPoint < 0) {
    throw new Error('This column is full!');
  }
  return set(lensPath([column, rowDropPoint]), color, board);
};

const reducer = (state, action) => {
  if (action.type === 'drop') {
    return {
      ...state,
      board: dropPieceInBoard(state.board, action.column, state.nextTurn),
      nextTurn: state.nextTurn === 'black' ? 'red' : 'black',
    };
  }
  return state;
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { board, nextTurn } = state;
  return (
    <div>
      <h1 className={styles.heading}>
        Connect Four
      </h1>
      <Board
        board={board}
        onDrop={column => {
          dispatch({ type: 'drop', column });
        }}
      />
      <p>
        {nextTurn === 'black' ? 'Black' : 'Red'}&apos;s turn!
      </p>
    </div>
  );
};

export default App;
