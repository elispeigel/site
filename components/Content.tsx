import { FunctionComponent } from "react";
import styled from "styled-components";

import { ITheme } from "styles/theme";


const Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: right;
  padding: ${({ theme }: { theme: ITheme}) => `0 ${theme.relationalSizes.horizontal.large} 0 ${theme.relationalSizes.horizontal.large}`};
`;

const Container = styled.div`
  height: auto;
  width: auto;
  display: grid;
  border: ${({ theme }: { theme: ITheme}) => `.25rem solid ${theme.colors.green}`};
  align-items: center;
  justify-items: center;
`;

const Content: FunctionComponent = ({ children }: { children: any }) => (
  <Wrapper>
    <Container>
      {children}
    </Container>
  </Wrapper>
);

export default Content;