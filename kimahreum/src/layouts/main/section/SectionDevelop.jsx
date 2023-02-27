import styled from "styled-components";
import { useState } from "react";

function SectionDevelop() {
  const [isListHover, setIsListHover] = useState(false);

  return (
    <Container id="develop">
      <Wrap>
        <Content>
          <Title>
            <h2>Front-End Web Develop</h2>
            <h3>
              Endeavors for more reasonable, logical design. I have learned to
              create clearer, more logical and reasonable design and to increase
              efficiency of collaboration.
            </h3>
            <View>
              <span></span>
            </View>
          </Title>
          <ContentList>
            <li
              onMouseOver={() => setIsListHover(true)}
              onMouseOut={() => setIsListHover(false)}
            >
              {isListHover && (
                <ImgBg>
                  <img
                    className="main_01"
                    alt="main_bg01"
                    src="img/main_bg01.jpg"
                  />
                </ImgBg>
              )}
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <div>
                  <h2>Cuckoo</h2>
                  <HoverWrap>
                    <h4>
                      <a href="https://kimahr.github.io/clonecoding/class/cuckoo">
                        VIEW
                      </a>
                    </h4>
                    <span></span>
                  </HoverWrap>
                </div>
              </ListTitle>
            </li>
            <li
              onMouseOver={() => setIsListHover(true)}
              onMouseOut={() => setIsListHover(false)}
            >
              {isListHover && (
                <ImgBg>
                  <img
                    className="main_02"
                    alt="main_bg02"
                    src="img/main_bg02.jpg"
                  />
                </ImgBg>
              )}
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <div>
                  <h2>DKG Holdings</h2>
                  <HoverWrap>
                    <h4>
                      <a href="https://kimahr.github.io/clonecoding/class/DKG">
                        VIEW
                      </a>
                    </h4>
                    <span></span>
                    <div>
                      <div></div>
                    </div>
                  </HoverWrap>
                </div>
              </ListTitle>
            </li>
            <li
              onMouseOver={() => setIsListHover(true)}
              onMouseOut={() => setIsListHover(false)}
            >
              {isListHover && (
                <ImgBg>
                  <img
                    className="main_03"
                    alt="main_bg03"
                    src="img/main_bg03.jpg"
                  />
                </ImgBg>
              )}
              <ListTitle>
                <h3>RESPONSIVE WEBSITE</h3>
                <div>
                  <h2>Zinus</h2>
                  <HoverWrap>
                    <h4>
                      <a href="https://kimahr.github.io/clonecoding/class/zinus">
                        VIEW
                      </a>
                    </h4>
                    <span></span>
                    <div>
                      <div></div>
                    </div>
                  </HoverWrap>
                </div>
              </ListTitle>
            </li>
            <li
              onMouseOver={() => setIsListHover(true)}
              onMouseOut={() => setIsListHover(false)}
            >
              {isListHover && (
                <ImgBg>
                  <img
                    className="main_03"
                    alt="main_bg03"
                    src="img/main_bg03.jpg"
                  />
                </ImgBg>
              )}
              <ListTitle>
                <h3>RENEWAL WEBSITE</h3>
                <div>
                  <h2>Fresh</h2>
                  <HoverWrap>
                    <h4>
                      <a href="https://kimahr.github.io/clonecoding/fresh/fresh">
                        VIEW
                      </a>
                    </h4>
                    <span></span>
                    <div>
                      <div></div>
                    </div>
                  </HoverWrap>
                </div>
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
  height: 50vw;
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
  padding-top: 100px;

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
  padding-top: 100px;

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

const ImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  img {
    z-index: -1;
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
  }
`;
