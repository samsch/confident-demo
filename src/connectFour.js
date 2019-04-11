import set from 'ramda/src/set';
import lensPath from 'ramda/src/lensPath';
import createError from 'create-error';
import reducerErrors from './util/reducerErrors';

export const initialState = {
  board: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ],
  messages: [],
  nextTurn: 'black',
  winner: null,
};

const unique = () => `${Date.now()}${Math.random()}`;

const addMessage = (state, text, type = 'error') => {
  return {
    ...state,
    messages: [
      { id: unique(), text, type },
      ...state.messages,
    ]
  };
};

const ColumnFullError = createError('ColumnFullError');
const GameFinishedError = createError('GameFinishedError');

const handleReducerError = (error, state/*, action */) => {
  if (error instanceof ColumnFullError) {
    return addMessage(state, 'This column is already filled!');
  }
  if (error instanceof GameFinishedError) {
    return addMessage(state, state.winner ?
      `${state.winner === 'black' ? 'Black' : 'Red'} already won! Hit Reset to start a new game.`:
      'The game was a tie, hit Reset to start a new game!'
    );
  }
  // eslint-disable-next-line no-console
  console.log('UNKNOWN STATE UPDATE ERROR!', error);
};

const dropPieceInBoard = (board, column, color) => {
  const rowDropPoint = board[column].findIndex(value => value === null);
  if (rowDropPoint < 0) {
    throw new ColumnFullError();
  }
  return set(lensPath([column, rowDropPoint]), color, board);
};

export const allMatch = (board, color, vectors) => {
  return vectors.every(([x, y]) => {
    return board[x] && board[x][y] === color;
  });
};

const relative = [
  [[0, 0], [1, 0], [2, 0], [3, 0]], // horizontal
  [[0, 0], [0, 1], [0, 2], [0, 3]], // vertical
  [[0, 0], [1, 1], [2, 2], [3, 3]], // diagonal up
  [[0, 0], [1, -1], [2, -2], [-3, -3]], // diagonal down
];
const makeAbsoluteVictories = (x, y) => {
  return relative.map(vectors => {
    return vectors.map(([dx, dy]) => {
      return [x + dx, y + dy];
    });
  });
};

export const checkCellForWin = (board, x, y) => {
  const victoryVectors = makeAbsoluteVictories(x, y);
  return victoryVectors.some(vectors => {
    return allMatch(board, board[x][y], vectors);
  });
};

export const findWinner = board => {
  let winner = null;
  board.forEach((column, x) => {
    if (winner) {
      return;
    }
    winner = column.find((color, y) => {
      if (!color) {
        return false;
      }
      return checkCellForWin(board, x, y);
    }) || null;
  });
  return winner;
};

export const reducer = reducerErrors(handleReducerError)((state, action) => {
  if (action === 'reset') {
    return initialState;
  }
  if (action.type === 'drop') {
    if (state.winner) {
      throw new GameFinishedError();
    }
    const board = dropPieceInBoard(state.board, action.column, state.nextTurn);
    const winner = findWinner(board);
    return {
      ...state,
      board,
      messages: winner ? addMessage(state, 'Game finished', 'win').messages : state.messages,
      nextTurn: state.nextTurn === 'black' ? 'red' : 'black',
      winner,
    };
  }
  return state;
});
