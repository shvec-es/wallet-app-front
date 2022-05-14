import React from 'react';
import Icons from '../../images/sprite.svg';
import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <svg className={`icon ${name}`}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
