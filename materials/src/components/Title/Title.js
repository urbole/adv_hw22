import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const Title = styled.h1`
  color: #fff;
  animation: 3s ${fadeInAnimation};
`;

export default Title;
