import React from 'react';
import { Form } from './Form.styled';
import PropTypes from 'prop-types';

export const FormPhonebook = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

FormPhonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
