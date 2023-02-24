import styled from "styled-components";

function SectionSkills() {
  return (
    <Container>
      <Title>
        <h2>skill</h2>
      </Title>
      <ListWrap>
        <SlideList>
          <li>
            <SlideText>
              <a href="javascript">html</a>
              <span></span>
            </SlideText>
          </li>
          <li>
            <SlideText>
              <a href="javascript">css</a>
              <span></span>
            </SlideText>
          </li>
          <li>
            <SlideText>
              <a href="javascript">javascript</a>
              <span></span>
            </SlideText>
          </li>
          <li>
            <SlideText>
              <a href="javascript">react</a>
              <span></span>
            </SlideText>
          </li>
          <li>
            <SlideText>
              <a href="javascript">photoshop</a>
              <span></span>
            </SlideText>
          </li>
          <li>
            <SlideText>
              <a href="javascript">Xd</a>
              <span></span>
            </SlideText>
          </li>
          <li>
            <SlideText>
              <a href="javascript">figma</a>
              <span></span>
            </SlideText>
          </li>
          <li>
            <SlideText>
              <a href="javascript">GITHUB</a>
              <span></span>
            </SlideText>
          </li>
        </SlideList>
      </ListWrap>
      <LineWrap>
        <li>
          <Line></Line>
          <div class="one"></div>
          <Text>html</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
        <li>
          <Line></Line>
          <div class="one"></div>
          <Text>css</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
        <li>
          <Line></Line>
          <div class="one"></div>
          <Text>javascript</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
        <li>
          <Line></Line>
          <div class="one"></div>
          <Text>react</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
        <li class="adds2Page">
          <Line></Line>
          <div class="one"></div>
          <Text>photoshop</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
        <li>
          <Line></Line>
          <div class="one"></div>
          <Text>xd</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
        <li>
          <Line></Line>
          <div class="one"></div>
          <Text>figma</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
        <li>
          <Line></Line>
          <div class="one"></div>
          <Text>github</Text>
          <a href="javascript:" class="s2PageBtn"></a>
        </li>
      </LineWrap>
    </Container>
  );
}

export default SectionSkills;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 45vw;
  max-width: 1400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white_color};
`;

const Title = styled.div`
  margin-top: 140px;

  h2 {
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
    color: ${({ theme }) => theme.colors.main_color};
  }
`;

const ListWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
`;

const SlideList = styled.ul`
  width: 50%;
  height: 50%;

  position: relative;

  display: flex;
  flex-direction: column;
  li {
    z-index: 1;

    width: 50%;
    height: 300px;
    background: #fff;
  }
`;

const SlideText = styled.div`
  position: relative;
  display: inline-block;

  a {
    z-index: 2;
    position: relative;
    color: ${({ theme }) => theme.colors.main_color};
    font-size: ${({ theme }) => theme.fonts.fontExtra};
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
  }
  span {
    z-index: 1;
    display: inline-block;
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    height: 15%;
    background: #5053582c;
    transition: all 0.3s;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: #0066ff;
      transition: all 0.3s;
    }
  }
`;
const LineWrap = styled.ul`
  z-index: 2;
  position: absolute;
  top: 20%;
  left: 30%;
`;
const Line = styled.div`
  width: 34px;
  height: 1px;
  background: transparent;
  margin-bottom: 6px;
  transition: all 0.3s;
`;

const Text = styled.div`
  color: #8e8f9a;
  font-size: 18px;
`;
