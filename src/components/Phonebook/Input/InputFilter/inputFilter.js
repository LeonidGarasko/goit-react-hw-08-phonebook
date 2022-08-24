import React from 'react';
import { Input } from '../Input.styled';
import PropTypes from 'prop-types';

export const InputFilter = ({ onChange, value }) => (
  <>
    <Input
      type="text"
      name="filter"
      placeholder="Find contact"
      onChange={onChange}
      value={value}
    />
  </>
);

InputFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
