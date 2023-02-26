import styled from "styled-components";

function Footer() {
  return <Container>footer</Container>;
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 25vw;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.main_color};
  position: relative;
`;
