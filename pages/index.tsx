import styled from 'styled-components'
import Name from 'components/Name';
import Menu from 'components/Menu';


const Style = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.tan};
  display: grid;
  grid-template-rows: 45% 55%;
`;


export default function Home() {
  return (
    <Style>
      <Name/>
      <Menu/>
    </Style>
  )
}