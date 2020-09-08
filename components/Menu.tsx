
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: end;
  justify-items: right;
`;

const Container = styled.div`
  height: auto;
  width: auto;
  display: grid;
  border: .2rem solid ${({ theme }) => theme.colors.green};
  align-items: center;
  justify-items: center;
  margin: 60px;
`;

const LinkWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
  padding-right: 80px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.brown};
  font: 1.8rem 'Brandon';
  text-decoration: none;
`;

const Menu: FunctionComponent = () => (
  <Wrapper>
    <Container>
      <LinkWrapper>
        <Link href='https://github.com/elispeigel'>github</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href='/resume.pdf' download>resume</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link>contact</Link>
      </LinkWrapper>
    </Container>
  </Wrapper>
)

export default Menu;