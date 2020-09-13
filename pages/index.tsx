import { useState } from 'react';
import styled from 'styled-components';

import Name from 'components/Name';
import Content from 'components/Content';
import Menu from 'components/Menu';
import Contact from 'components/Contact';
import { ITheme } from 'styles/theme';


export enum ContentType {
  MENU = 'MENU',
  CONTACT = 'CONTACT'
}

export interface IHomeState {
  content: ContentType
}

const Style = styled.div`
  height: 100vh;
  background: ${({ theme }: { theme: ITheme}) => theme.colors.tan};
  display: grid;
  grid-template-rows: min-content auto;
`;


export default function Home() {

  const [content, setContent] = useState(ContentType.MENU);

  function handleContentChange(newValue) {
    setContent(newValue)
  }

  return (
    <Style>
      <Name/>
      <Content>
        {
          content === ContentType.MENU ?
          <Menu onContentChange={handleContentChange} /> :
          <Contact onContentChange={handleContentChange}  />
        }
      </Content>
    </Style>
  )
}