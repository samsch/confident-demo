import React from 'react';
import PropTypes from 'prop-types';

// TODO add insert animation to all message.

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map(({ id, text }) => {
        return (
          <div
            key={id}
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
};
export default Messages;
