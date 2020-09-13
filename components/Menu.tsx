import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ContentType } from 'pages';
import { ITheme } from 'styles/theme';

interface MenuProps {
  onContentChange: (newValue: ContentType) => void;
}

const LinkWrapper = styled.div`
  padding-top: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.vertical.small};
  padding-bottom: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.vertical.small};
  padding-left: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.horizontal.large};
  padding-right: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.horizontal.large};
`;

const Link = styled.a`
  color: ${({ theme }: { theme: ITheme}) => theme.colors.blue};
  font: ${({ theme }: { theme: ITheme}) => theme.fontSizes.regular} 'Brandon';
  text-decoration: none;
  cursor: pointer;
`;

const Menu: FunctionComponent<MenuProps> = ({ onContentChange }) => (
  <>
      <LinkWrapper>
        <Link href='https://github.com/elispeigel'>github</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href='/resume.pdf' download>resume</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link onClick={() => onContentChange(ContentType.CONTACT)}>contact</Link>
      </LinkWrapper>
  </>
)

export default Menu;