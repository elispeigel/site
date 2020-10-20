import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Email } from '@styled-icons/evaicons-solid/Email';
import { ArrowBack } from '@styled-icons/evaicons-solid/ArrowBack';

import { ITheme, theme as styleTheme } from 'styles/theme';
import NavLink from 'components/NavLink';

interface ButtonBarProps {
  symbol: string;
  buttonType: 'button' | 'submit' | 'reset';
}

interface StyleProps {
  isSubmit: boolean;
}

const Style = styled.div<StyleProps>`
  padding: ${({ isSubmit }) => (isSubmit ? '0 20px 0 0' : '0 0 0 20px')};
  justify-self: ${({ isSubmit }) => (isSubmit ? 'right' : 'left')};
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

//TODO: DRY this out, some sort of generic
const StyledEmail = styled(Email)`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  height: max-content;
  padding-bottom: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.vertical.xsmall};

  :hover {
    color: ${({ theme }: { theme: ITheme }) => theme.colors.brown};
  }
`;

const StyledBack = styled(ArrowBack)`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.blue};
  height: max-content;
  padding-top: ${({ theme }: { theme: ITheme }) =>
    theme.relationalSizes.vertical.xsmall};

  :hover {
    color: ${({ theme }: { theme: ITheme }) => theme.colors.brown};
  }
`;

const Link = styled.a`
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const isSubmit = (buttonType: string) => buttonType === 'submit';

const ButtonBar: FunctionComponent<ButtonBarProps> = ({
  symbol,
  buttonType,
}) => (
  <Style isSubmit={isSubmit(buttonType)}>
    {isSubmit(buttonType) ? (
      <Button type={buttonType}>
        <StyledEmail size={styleTheme?.relationalSizes.combinedCalc.regular} />
      </Button>
    ) : (
      <NavLink href="/">
        <Link>
          <StyledBack size={styleTheme?.relationalSizes.combinedCalc.regular} />
        </Link>
      </NavLink>
    )}
  </Style>
);

export default ButtonBar;
