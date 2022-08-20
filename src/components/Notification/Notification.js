import React from 'react';
import PropTypes from 'prop-types';
import { Warning } from './Notification.styled';

export const Notification = ({ text }) => <Warning>{text}</Warning>;

Notification.prototype = {
  text: PropTypes.string,
};
