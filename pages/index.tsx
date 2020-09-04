import styled from 'styled-components'

const Style = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

const Text = styled.div`
  font-family: 'Bold';
  font-size: 60px;
`;

export default function Home() {
  return (
    <Style>
      <Text>hello</Text>
    </Style>
  )
}
