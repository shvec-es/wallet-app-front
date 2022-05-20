import React, { Fragment } from 'react';
import Media from 'react-media';
import Icon from '../../images/registrpage.svg';
import IconBig from '../../images/registrpagebig.svg';
import { Wrapper, Text } from './LogoForm.styled';

const LogoForm = () => {
  return (
    <Wrapper>
      <Media
        queries={{
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.medium && <img src={Icon} alt="Logo" />}
            {matches.large && <img src={IconBig} alt="Logo" />}
          </Fragment>
        )}
      </Media>

      {/* <Media query="(min-width: 768px)">
        <img src={Icon} alt="Logo" />
      </Media>

      <Media query="(min-width: 1240px)">
        <img src={IconBig} alt="Logo" />
      </Media> */}
      <Text>Finance App</Text>
    </Wrapper>
  );
};

export default LogoForm;
