import { FunctionComponent } from "react";
import styled from "styled-components";
import { ITheme } from "styles/theme";
import NavLink from "./NavLink";

const LinkWrapper = styled.div`
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.vertical.small};
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.vertical.small};
  padding-left: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.horizontal.large};
  padding-right: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.horizontal.large};
  text-align: center;
`;

const Style = styled.a`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  font-family: "Brandon", "Helvetica Neue";
  font-weight: 500;
  font-style: italic;
  font-size ${({ theme }: { theme: ITheme }) => theme.fontSizes.regular};
  text-decoration: none;
  cursor: pointer;
  width: min-content;
`;

const Menu: FunctionComponent = () => (
  <nav>
    <LinkWrapper>
      <Style href='https://github.com/elispeigel'>github</Style>
    </LinkWrapper>
    <LinkWrapper>
      <Style href='/resume.pdf' download>
        resume
      </Style>
    </LinkWrapper>
    <LinkWrapper>
      <NavLink href='/contact'>
        <Style>contact</Style>
      </NavLink>
    </LinkWrapper>
  </nav>
);

export default Menu;
