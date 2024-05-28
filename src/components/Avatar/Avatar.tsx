import styled from 'styled-components';
import { QUERIES } from '../../constants';
import AvatarSVG from '../../assets/images/avatar.svg?react';
import Eye from '../Eye';

const Avatar = () => {
  return (
    <AvatarWrapper>
      <AvatarSVG />
      <Eyes>
        <LeftEye />
        <RightEye />
      </Eyes>
    </AvatarWrapper>
  );
};

const LeftEye = styled(Eye)`
  left: 5px;
  top: 5px;
`;

const RightEye = styled(Eye)`
  right: 7px;
  top: 5px;
`;

const Eyes = styled.div`
  height: 20px;
  width: 50px;
  top: 65px;
  position: absolute;
`;

const AvatarWrapper = styled.div`
  height: 500px;
  width: 100%;
  min-width: 250px;
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

export default Avatar;
