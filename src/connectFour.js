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

const unique = () => `${Date.now}${Math.random()}`;

const ColumnFullError = createError('ColumnFullError');

const handleReducerError = (error, state/*, action */) => {
  if (error instanceof ColumnFullError) {
    return {
      ...state,
      messages: [
        { id: unique(), text: 'This column is already filled!' },
        ...state.messages,
      ]
    };
  }
  // eslint-disable-next-line no-console
  console.log('UNKNOWN STATE UPDATE ERROR!', error);
};

const dropPieceInBoard = (board, column, color) => {
  const rowDropPoint = board[column].findIndex(value => value === null);
  if (rowDropPoint < 0) {
    throw new ColumnFullError('This column is full!');
  }
  return set(lensPath([column, rowDropPoint]), color, board);
};

const findWinner = board => {
  return null;
};

export const reducer = reducerErrors(handleReducerError)((state, action) => {
  if (action.type === 'drop') {
    const board = dropPieceInBoard(state.board, action.column, state.nextTurn);
    const winner = findWinner(board);
    return {
      ...state,
      board,
      nextTurn: state.nextTurn === 'black' ? 'red' : 'black',
      winner,
    };
  }
  return state;
});
