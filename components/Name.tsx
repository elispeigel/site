import styled from "styled-components";
import { FunctionComponent } from "react";

const Style = styled.div`
  font-family: 'Bold';
  font-size: 7vw;
  color: ${({ theme }) => theme.colors.black};
  text-shadow: ${({ theme }) => `8px 4px 8px ${theme.colors.orange}`};
  text-align: center;

`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export default (() => (
  <Wrapper>
    <Style>Eli Speigel</Style>
  </Wrapper>
)) as FunctionComponent;