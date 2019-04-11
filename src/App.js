import React from 'react';
import { css } from 'emotion';
import classNames from 'classnames';
import { initialState, reducer } from './connectFour';
import Board from './Board';
import Messages from './Messages';

const styles = {
  gameArea: css`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    column-gap: 1rem;
  `,
  heading: css`
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
  `,
  boardArea: css`
    grid-column-start: 2;
    grid-column-end: 3;
  `,
  messages: css`
    grid-column-start: 3;
    grid-column-end: 4;
`,
  status: css`
    line-height: 3rem;
    font-size: 1.5rem;
  `,
  winner: css`
    font-weight: bold;
  `,
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { board, messages, nextTurn, winner } = state;
  return (
    <div className={styles.gameArea}>
      <h1 className={styles.heading}>
        Connect Four
      </h1>
      <div
        className={styles.boardArea}
      >
        <Board
          board={board}
          onDrop={column => {
            dispatch({ type: 'drop', column });
          }}
        />
        {winner ? (
          <p className={classNames(styles.status, styles.winner)}>
            {winner.toUpperCase()} WINS!
          </p>
        ) : (
          <p className={styles.status}>
            {nextTurn === 'black' ? 'Black' : 'Red'}&apos;s turn!
          </p>
        )}
        <div>
          <button
            type="button"
            onClick={() => {
              dispatch('reset');
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <Messages
        messages={messages}
        className={styles.messages}
      />
    </div>
  );
};

export default App;
