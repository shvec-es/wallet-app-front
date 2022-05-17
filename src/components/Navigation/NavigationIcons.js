import React from 'react';
import Icons from '../../images/sprite.svg';
import PropTypes from 'prop-types';
import { StyledSvg } from './Navigation.styled';

const Icon = ({ name }) => (
  <StyledSvg>
    <use xlinkHref={`${Icons}#${name}`} />
  </StyledSvg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
