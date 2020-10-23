import styled from 'styled-components';
import { FunctionComponent } from 'react';

import { ITheme } from 'styles/theme';

const Wrapper = styled.header`
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
  margin: 0;
  padding-left: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.horizontal.regular};
`;

const Text = styled.h1`
  font: ${({ theme }: { theme: ITheme }) => theme.fontSizes.xlarge} 'Recoleta';
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  margin: 0;
`;

export default (() => (
  <Wrapper>
    <Container>
      <Style>
        <Text>Eli</Text>
      </Style>
      <Style>
        <Text>Speigel</Text>
      </Style>
    </Container>
  </Wrapper>
)) as FunctionComponent;
