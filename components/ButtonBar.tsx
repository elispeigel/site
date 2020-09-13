import { FunctionComponent } from "react";
import styled from "styled-components";

import { ContentType } from "pages";
import { ITheme } from "styles/theme";

interface ButtonBarProps {
  symbol: string;
  buttonType: "button" | "submit" | "reset";
  onContentChange?: (newValue: ContentType) => void;
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
  font-size: ${({ theme }: { theme: ITheme}) => theme.fontSizes.large};

  :hover {
    color: ${({ theme }: { theme: ITheme}) => theme.colors.brown};
  }
`;

const isSubmit = (buttonType: string) => buttonType === 'submit';

const ButtonBar: FunctionComponent<ButtonBarProps> = ({ symbol, onContentChange, buttonType }) => (
  <Style isSubmit={isSubmit(buttonType)}>
    {
      isSubmit(buttonType) ?
      (
        <Button
          type={buttonType}
        >
          {symbol}
        </Button>
      ) :
      (
        <Button
          onClick={() => onContentChange(ContentType.MENU)}
          type={buttonType}
        >
          {symbol}
        </Button>
      )

    }

  </Style>
);


export default ButtonBar;