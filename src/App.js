import React from 'react';
import styles from './style.css';
import { initialState, reducer } from './connectFour';
import Board from './Board';
import Messages from './Messages';

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { board, messages, nextTurn } = state;
  return (
    <div>
      <h1 className={styles.heading}>
        Connect Four
      </h1>
      <div>
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
      <Messages messages={messages} />
    </div>
  );
};

export default App;
