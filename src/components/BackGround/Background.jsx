import icons from 'images/sprite.svg';
import { Wrapper, TopEllipse, BottomEllipse } from './BackGround.styled';

const BackGround = () => {
  return (
    <Wrapper className="BackGround">
      <TopEllipse>
        <use href={`${icons}#bg-top`}></use>
      </TopEllipse>
      <BottomEllipse>
        <use href={`${icons}#bg-bottom`}></use>
      </BottomEllipse>
    </Wrapper>
  );
};

export default BackGround;
