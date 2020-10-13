import styled from "styled-components";
import { FunctionComponent } from "react";

import { ITheme } from 'styles/theme'

const Wrapper = styled.div`
  height: auto;
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
  font: ${({ theme }: { theme: ITheme}) => theme.fontSizes.large} 'Recoleta';
  color: ${({ theme }: { theme: ITheme}) => theme.colors.blue};
  margin: 0;
  padding-left: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.horizontal.regular};
`;


export default (() => (
  <Wrapper>
    <Container>
      <Style>Eli</Style>
      <Style>Speigel</Style>
    </Container>
  </Wrapper>
)) as FunctionComponent;