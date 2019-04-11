import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const styles = {
  board: css`
    display: flex;
    justify-content: center;
  `,
  column: css`
    display: block;
    flex: 0 0 5rem;
    padding: .5rem;
    background-color: yellow;
  `,
  cell: css`
    width: 4rem;
    height: 4rem;
    margin: .5rem 0;
    border-radius: 2rem;
    background-color: white;
    border: solid .2rem rgb(218, 218, 0);
  `,
};

const printPlayed = state => {
  if (state === 'black') {
    return 'b';
  }
  if (state === 'red') {
    return 'r';
  }
  return '|';
};

const Board = ({
  board,
  onDrop,
}) => {
  return (
    <div
      className={styles.board}
    >
      {board.map((column, columnIndex) => {
        return (
          <div
            key={columnIndex}
            className={styles.column}
          >
            {column.map((played, rowIndex) => {
              return (
                <button
                  key={rowIndex}
                  className={styles.cell}
                  type="button"
                  onClick={() => onDrop(columnIndex)}
                >
                  {printPlayed(played)}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf([null, 'black', 'red']))).isRequired,
  onDrop: PropTypes.func.isRequired,
};
export default Board;
