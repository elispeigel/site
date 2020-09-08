
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: right;
  padding-right: 8vh;
`;

const Container = styled.div`
  height: auto;
  width: auto;
  display: grid;
  border: .2rem solid ${({ theme }) => theme.colors.green};
  align-items: center;
  justify-items: center;
`;

const LinkWrapper = styled.div`
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  padding-left: 6vw;
  padding-right: 6vw;
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
        <Link href='/resume.pdf'download>resume</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="mailto:eli.speigel@gmail.com">contact</Link>
      </LinkWrapper>
    </Container>
  </Wrapper>
)

export default Menu;