import React from 'react';
import { Button } from './ButtonSubmit.styled';
import PropTypes from 'prop-types';

export const ButtonSubmit = ({ text }) => <Button type="submit">{text}</Button>;

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};
