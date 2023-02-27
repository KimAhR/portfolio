import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Wrap>
        <Gnb>
          <Logo>ahreum</Logo>
          <Nav>
            <ul>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#develop">DEVELOP</a>
              </li>
              <li>
                <a href="#project">PROJECT</a>
              </li>
            </ul>
            <HamBtn>
              <span></span>
              <span></span>
              <span></span>
            </HamBtn>
          </Nav>
        </Gnb>
      </Wrap>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: ${({ theme }) => theme.fonts.font_color};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Gnb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  width: 10%;
  font-size: 1rem;
`;

const Nav = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ul {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      font-size: 15px;
      font-weight: ${({ theme }) => theme.colors.weightSemiBold};
      a {
        color: ${({ theme }) => theme.colors.white_color};
      }
    }
  }
`;

const HamBtn = styled.div`
  width: 21px;
  height: 14px;
  span {
    display: block;
    width: 21px;
    height: 2px;
    background-color: #fff;
    margin-bottom: 5px;
  }
`;
