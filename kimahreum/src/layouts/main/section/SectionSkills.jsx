import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

function SectionSkills() {
  const data = [
    {
      id: 0,
      title: "html",
      content: "html",
    },
    {
      id: 1,
      title: "css",
      content: "css",
    },
    {
      id: 2,
      title: "JavaScript",
      content: "JavaScript",
    },
    {
      id: 3,
      title: "react",
      content: "react",
    },
    {
      id: 4,
      title: "photoshop",
      content: "photoshop",
    },
    {
      id: 5,
      title: "xd",
      content: "xd",
    },
    {
      id: 6,
      title: "figma",
      content: "figma",
    },
    {
      id: 7,
      title: "github",
      content: "github",
    },
  ];

  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Container>
      <Title>
        <h2>skill</h2>
      </Title>
      <ListWrap>
        <SlideList>
          {data.map((item) => (
            <li
              key={item.id}
              className={index === item.id ? SlideTextWrap.active : null}
              onClick={() => setIndex(item.id)}
              style={{ transform: `translate3d(${index}%)` }}
            >
              {item.title}
              {data.map((index) => (
                <span key={index}></span>
              ))}
            </li>
          ))}
        </SlideList>
      </ListWrap>
      <SlideTextWrap>
        {data
          .filter((item) => index === item.id)
          .map((item) => (
            <SlideText>
              {item.content}
              <span></span>
            </SlideText>
          ))}
      </SlideTextWrap>
    </Container>
  );
}
export default SectionSkills;

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 40vw;
  max-width: 1400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white_color};
`;

const Title = styled.div`
  margin-top: 140px;

  h2 {
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
    color: ${({ theme }) => theme.colors.black_color};
  }
`;

const ListWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
`;

const SlideList = styled.ul`
  width: 50%;
  height: 50%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    width: 50%;
    height: 300px;

    position: relative;
    color: #8e8f9a;
    transition: all 0.3s ease;
    &:hover {
      color: #000;
      &::after {
        content: "";
        display: block;
        width: 34px;
        height: 1px;
        background: #8e8f9a;

        position: absolute;

        top: 20%;
        left: -10%;

        transition: all 0.3s ease;
      }
    }
  }
`;

const SlideTextWrap = styled.ul`
  /* position: absolute;
  width: 100%; */
  top: 20%;
  right: 30%;
`;

const SlideText = styled.li`
  position: absolute;
  display: inline-block;
  top: 20%;
  left: 50%;

  background: #fff;
  color: ${({ theme }) => theme.colors.main_color};
  font-size: ${({ theme }) => theme.fonts.fontExtra};
  font-weight: ${({ theme }) => theme.fonts.weightExtra};
  z-index: 2;

  span {
    display: inline-block;
    position: absolute;

    bottom: 4%;

    left: 0;
    width: 100%;
    height: 20%;
    background: #5053582c;
    transition: all 0.7s;
    overflow: hidden;

    &::before {
      z-index: -2;
      content: "";
      position: absolute;
      top: 0;
      left: 0%;
      width: 0%;
      height: 100%;
      background: #0066ff;
      transition: all 0.7s;
    }
    &:hover {
      &::before {
        z-index: -2;
        width: 100%;
      }
    }
  }
`;
