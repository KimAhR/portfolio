import styled from "styled-components";

function SectionDevelop() {
  return (
    <Container>
      <Wrap>
        <div></div>

        <Content>
          <Title>
            <h2>Front-End Web Develop</h2>
            <h3>
              Endeavors for more reasonable, logical design. I have learned to
              create clearer, more logical and reasonable design and to increase
              efficiency of collaboration.
            </h3>
            <View>
              <a href="#">VIEW</a>
              <span></span>
            </View>
          </Title>
          <ContentList>
            <li class="li0">
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <div>
                  <h2>Design Hotels</h2>
                  <HoverWrap>
                    <h4>&lt;VIEW/&gt;</h4>
                    <span></span>
                  </HoverWrap>
                </div>
                <a href="#"></a>
              </ListTitle>
            </li>
            <li class="li1">
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <div>
                  <h2>Lanbelle</h2>
                  <HoverWrap>
                    <h4>&lt;VIEW/&gt;</h4>
                    <span></span>
                  </HoverWrap>
                </div>
                <a href="#"></a>
              </ListTitle>
            </li>
            <li class="li2">
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <div>
                  <h2>GM</h2>
                  <HoverWrap>
                    <h4>&lt;VIEW/&gt;</h4>
                    <span></span>
                  </HoverWrap>
                </div>
                <a href="#"></a>
              </ListTitle>
            </li>
            <li class="li3">
              <ListTitle>
                <h3>PC WEBSITE</h3>
                <div>
                  <h2>Torayamk</h2>
                  <HoverWrap>
                    <h4>&lt;VIEW/&gt;</h4>
                    <span></span>
                  </HoverWrap>
                </div>
                <a href="#"></a>
              </ListTitle>
            </li>
          </ContentList>
        </Content>
      </Wrap>
    </Container>
  );
}

export default SectionDevelop;

const Container = styled.div`
  width: 100%;
  height: 1100px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.main_color};

  position: relative;
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  margin-left: 50px;
  width: 43%;
  padding-top: 200px;

  h2 {
    width: 60%;
    font-weight: ${({ theme }) => theme.fonts.weightRegular};
    color: ${({ theme }) => theme.colors.white_color};
    font-size: 60px;
    margin-top: 20px;
    line-height: 120%;
  }
  h3 {
    width: 50%;
    font-weight: ${({ theme }) => theme.fonts.weightRegular};
    color: ${({ theme }) => theme.colors.white_color};
    font-size: ${({ theme }) => theme.fonts.fontSemiMedium};
    line-height: 160%;
    margin-top: 40px;
  }
`;

const View = styled.div`
  z-index: 3;
  position: absolute;
  bottom: -50px;
  left: 0;
  display: inline-block;
  width: auto;
  height: 25px;

  margin-top: 40px;

  a {
    z-index: 2;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-family: "Montserrat";
    font-weight: 500;
    color: #fff;
    font-size: 15px;
    transition: all 0.3s;
  }

  span {
    z-index: 1;
    position: absolute;
    bottom: 10px;
    left: 0;
    display: inline-block;
    width: 100%;
    background: #0066ff;
    height: 6px;
    transition: all 0.3s;
    transform: scale(0, 1);
  }
`;

const ContentList = styled.ul`
  width: 100%;
  max-width: 73.5680504%;
  margin: 0 auto;
  padding-top: 200px;
  li {
    border-top: 1px solid #fff;
    width: 50%;
    height: 190px;
    opacity: 0.5;
    &:last-child {
      width: 100%;
    }
  }
`;

const ListTitle = styled.div`
  position: relative;
  padding-top: 55px;
  padding-left: 25px;
  h3 {
    font-weight: ${({ theme }) => theme.fonts.weightSemiRegular};
    color: ${({ theme }) => theme.colors.white_color};
    font-size: ${({ theme }) => theme.fonts.fontSmall};
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      padding-top: 20px;
      font-weight: ${({ theme }) => theme.fonts.weightSemiRegular};
      color: ${({ theme }) => theme.colors.white_color};
      font-size: ${({ theme }) => theme.fonts.fontMediumLarge};
    }
  }
`;

const HoverWrap = styled.div`
  h4 {
    font-weight: ${({ theme }) => theme.fonts.weightSemiRegular};
    color: transparent;
    font-size: ${({ theme }) => theme.fonts.fontMicro};
    transition: all 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.white_color};
    }
  }
`;
