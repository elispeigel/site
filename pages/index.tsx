import styled from 'styled-components'
import Name from 'components/Name';

const Style = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 30% 20% 50%;

`;

export default function Home() {
  return (
    <Style>
      <Name/>
    </Style>
  )
}
