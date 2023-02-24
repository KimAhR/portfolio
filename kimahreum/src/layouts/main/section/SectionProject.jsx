import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function SectionProject() {
  const [titleState, setTitleState] = useState(0);
  const titleRef = useRef(0);

  useEffect(() => {
    setInterval(() => {
      setTitleState((titleRef.current += 1));
    }, 1000);
  }, []);

  return (
    <Container>
      <Wrap>
        <TextBannerWrap>
          <TextBanner>
            <div>KEEP GOING</div>
          </TextBanner>
        </TextBannerWrap>
      </Wrap>
    </Container>
  );
}

export default SectionProject();

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Wrap = styled.div`
  width: 100%;
`;

const TextBannerWrap = styled.ul`
  position: relative;
  width: calc(1010 * 6);
`;

const TextBanner = styled.li`
  width: 1010px;
  div {
    margin: 40px 70px;
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
    font-size: 110px;
  }
`;
