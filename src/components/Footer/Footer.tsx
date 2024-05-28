import styled from 'styled-components';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Footer = () => {
  return <Wrapper>© {new Date().getFullYear()} Simon Lau</Wrapper>;
};

const Wrapper = styled(MaxWidthWrapper)`
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
