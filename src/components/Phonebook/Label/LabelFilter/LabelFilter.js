import React from 'react';
import { LabelFilterStyle } from './LabelFilter.styled';
import PropTypes from 'prop-types';

export const LabelFilter = ({ title, children }) => (
  <LabelFilterStyle>
    <p>{title}</p>
    {children}
  </LabelFilterStyle>
);

LabelFilter.propTypes = {
  title: PropTypes.string.isRequired,
};
