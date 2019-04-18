import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css, keyframes } from 'emotion';

const errorMessageAnimation = keyframes`
  from {
    border-left: solid 1rem transparent;
    opacity: 1;
  }
  5% {
    border-left: solid 1rem red;
  }
  15% {
    border-left: solid 1rem red;
  }
  50% {
    opacity: 1;
  }
  to {
    border-left: solid 1rem transparent;
    opacity: .5;
  }
`;

const styles = {
  messages: css`
    margin-top: 1rem;
    max-height: 500px;
    overflow-x: auto;
  `,
  message: css`
    margin-top: .5rem;
    border-left: solid 1rem transparent;
    padding-left: .25rem;
  `,
  errorMessage: css`
    animation: ${errorMessageAnimation} 2s 0s ease 1 forwards;
    border: none;
  `,
  winMessage: css`
    border-left: solid 1rem green;
  `,
};

const Messages = ({ messages, className }) => {
  return (
    <div className={classNames(className, styles.messages)}>
      {messages.map(({ id, text, type }) => {
        return (
          <div
            key={id}
            className={classNames(styles.message, {
              [styles.errorMessage]: type === 'error',
              [styles.winMessage]: type === 'win',
            })}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};
Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
};
export default Messages;
