import styled from "styled-components";
import { FunctionComponent } from "react";

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: start;
  justify-items: left;
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: left;
  grid-template-rows: 50% 50%;
`;

const Style = styled.div`
  font-family: 'Recoleta';
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
  padding-left: 20px;
`;


export default (() => (
  <Wrapper>
    <Container>
      <Style>Eli</Style>
      <Style>Speigel</Style>
    </Container>
  </Wrapper>
)) as FunctionComponent;