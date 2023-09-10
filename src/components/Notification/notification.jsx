import PropTypes from 'prop-types';
import React from 'react';
import { MessageWrapper, Message } from './notification.styled';

const Notification = ({ message }) => {
  return (
    <MessageWrapper>
      <Message>{message}</Message>
    </MessageWrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
