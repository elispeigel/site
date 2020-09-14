import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { ITheme } from "styles/theme";
import NavLink from 'components/NavLink'

interface ButtonBarProps {
  symbol: string;
  buttonType: "button" | "submit" | "reset";
}

interface StyleProps {
  isSubmit: boolean;
}

const Style = styled.div<StyleProps>`
  padding: ${({ isSubmit }) => isSubmit ? '0 20px 0 0' : '0 0 0 20px'};
  justify-self: ${({ isSubmit }) => isSubmit ? 'right' : 'left'};
`;

const Button = styled.button`
  color: ${({ theme }: { theme: ITheme}) => theme.colors.blue};
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: ${({ theme }: { theme: ITheme}) => theme.fontSizes.regular};

  :hover {
    color: ${({ theme }: { theme: ITheme}) => theme.colors.brown};
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }: { theme: ITheme}) => theme.colors.blue};
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: ${({ theme }: { theme: ITheme}) => theme.fontSizes.regular};

  :hover {
    color: ${({ theme }: { theme: ITheme}) => theme.colors.brown};
  }
`;

const isSubmit = (buttonType: string) => buttonType === 'submit';

const ButtonBar: FunctionComponent<ButtonBarProps> = ({ symbol, buttonType }) => (
  <Style isSubmit={isSubmit(buttonType)}>
    {
      isSubmit(buttonType) ?
      (
        <Button type={buttonType}>
          {symbol}
        </Button>
      ) :
      (
        <NavLink href='/'>
          <Link>
            {symbol}
          </Link>
        </NavLink>
      )
    }
  </Style>
);


export default ButtonBar;