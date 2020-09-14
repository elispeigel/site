import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { ITheme } from 'styles/theme';
import NavLink from './NavLink';


const LinkWrapper = styled.div`
  padding-top: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.vertical.small};
  padding-bottom: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.vertical.small};
  padding-left: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.horizontal.large};
  padding-right: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.horizontal.large};
`;

const Style = styled.a`
  color: ${({ theme }: { theme: ITheme}) => theme.colors.blue};
  font: ${({ theme }: { theme: ITheme}) => theme.fontSizes.regular} 'Brandon';
  text-decoration: none;
  cursor: pointer;
`;

const Menu: FunctionComponent = () => (
  <>
      <LinkWrapper>
        <Style href='https://github.com/elispeigel'>github</Style>
      </LinkWrapper>
      <LinkWrapper>
        <Style href='/resume.pdf' download>resume</Style>
      </LinkWrapper>
      <LinkWrapper>
        <NavLink href='/contact'>
          <Style>contact</Style>
        </NavLink>
      </LinkWrapper>
  </>
)

export default Menu;