import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

function SectionAbout() {
  const data = [
    {
      id: 0,
      title: "html",
      content: "html",
      contents: "1. ",
    },
    {
      id: 1,
      title: "css",
      content: "css",
      contents: "2. ",
    },
    {
      id: 2,
      title: "JavaScript",
      content: "JavaScript",
      contents: "3. ",
    },
    {
      id: 3,
      title: "react",
      content: "react",
      contents: "4. ",
    },
    {
      id: 4,
      title: "photoshop",
      content: "photoshop",
      contents: "5. ",
    },
    {
      id: 5,
      title: "xd",
      content: "xd",
      contents: "6. ",
    },
    {
      id: 6,
      title: "figma",
      content: "figma",
      contents: "7. ",
    },
    {
      id: 7,
      title: "github",
      content: "github",
      contents: "8. ",
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
  });

  return (
    <Container id="about">
      <Title>
        <h2>about</h2>
      </Title>
      <Wrap>
        <AboutBox>
          <TextBox>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem doloremque accusantium itaque, sint, amet vero quis
              esse laboriosam quasi suscipit ullam magni est quia sit adipisci
              ut, impedit neque asperiores?
            </p>
          </TextBox>
        </AboutBox>
        <SkillsWrap>
          <SkillTitle>
            <h3>skill</h3>
          </SkillTitle>
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
          <SkillTextBox>
            {data
              .filter((item) => index === item.id)
              .map((item) => (
                <li>{item.contents}</li>
              ))}
          </SkillTextBox>
        </SkillsWrap>
      </Wrap>
    </Container>
  );
}

export default SectionAbout;

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 50vw;
  max-width: 1400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white_color};
`;

const Title = styled.div`
  margin-top: 50px;

  h2 {
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
    color: ${({ theme }) => theme.colors.black_color};
  }
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
`;

const AboutBox = styled.div`
  position: absolute;
  width: 45%;
  height: 70%;
  top: 10%;
  left: 0;

  background-color: ${({ theme }) => theme.colors.gray_color};
`;

const TextBox = styled.div`
  padding: 10%;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fonts.fontMedium};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
`;

const SkillsWrap = styled.text`
  position: absolute;

  width: 45%;
  height: 100%;
  top: 5px;
  right: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

const SkillTitle = styled.div`
  position: relative;
  h3 {
    font-size: 1.5em;
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
    color: ${({ theme }) => theme.colors.black_color};
  }
`;

const ListWrap = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;

  top: 20%;
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

        top: 40%;
        left: -50%;

        transition: all 0.3s ease;
      }
    }
  }
`;

const SlideTextWrap = styled.ul`
  position: relative;

  top: 60%;
  right: 0;
  /* bottom: 30%;
  left: 0%; */
`;

const SkillTextBox = styled.div`
  position: absolute;
  width: 75%;
  top: 18%;
  right: 0;
  padding: 10%;
  /* bottom: 21%; */
  margin: 0 auto;
  font-size: 28px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.gray_color};
  z-index: 1;
`;

const SlideText = styled.li`
  position: absolute;
  right: 0%;
  color: #112d4e;
  /* top: 50%; */
  font-size: 95px;
  font-weight: 800;
  z-index: 2;

  span {
    display: inline-block;
    position: absolute;

    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5053582c;
    transition: all 0.7s;
    overflow: hidden;
    z-index: 3;
    &::before {
      z-index: -2;
      content: "";
      position: absolute;
      top: ;
      left: 0;
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
