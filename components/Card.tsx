import styled from "styled-components";


const CardStyle = styled.div`
  height: 70%;
  width: 70%;
  background: ${({ theme }) => theme.white};
  border-radius: 50px;
  box-shadow:  ${({ theme }) => (
    `20px 20px 60px ${theme.whiteShadow},
    -20px -20px 60px ${theme.white};`
  )}
`;

const WrapperStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Card = ({ children }: { children: any }) => (
  <WrapperStyle>
    <CardStyle>
      {children}
    </CardStyle>
  </WrapperStyle>
)

export default Card;