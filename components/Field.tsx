
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ITheme } from 'styles/theme';

interface FieldProps {
  errors: any;
  title: string;
  value: string;
  children: any;
}

const Style = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }: { theme: ITheme}) => `max(${theme.relationalSizes.horizontal.regular}, calc(${theme.relationalSizes.regular.smaller} * 55px)) auto`};
  grid-column-gap: ${({ theme }: { theme: ITheme}) => theme.relationalSizes.horizontal.small};
  grid-template-rows: auto auto;
  height: max-content;
  padding: 10px;
  align-items: start; 
`;

const Label = styled.label`
  color: ${({ theme }: { theme: ITheme}) => theme.colors.brown};
  font: ${({ theme }: { theme: ITheme}) => theme.fontSizes.smaller} 'Brandon';
  justify-self: right;
`;

const Error = styled.span`
  grid-row: 2;
  grid-column: 2;
  color: ${({ theme }: { theme: ITheme}) => theme.colors.red};
  font: ${({ theme }: { theme: ITheme}) => theme.fontSizes.small} 'Brandon';
`;

const Field: FunctionComponent<FieldProps> = ({ errors, title, value, children }) => (
  <Style>
      <Label>{title}</Label>
      {children}
      {errors[`${value}`] && <Error>This field is required</Error>}
  </Style>
)


export default Field;