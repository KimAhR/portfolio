import styled from "styled-components";

function SectionProject() {
  return (
    <Container id="project">
      <Wrap>
        <Title>
          <h2>project</h2>
        </Title>
        <TitleBox>
          <h4>learn react project</h4>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nesciunt, unde vel, ipsum nulla quos alias quidem velit vero est
            sed. Voluptate nihil distinctio maiores architecto corrupti, quam
            suscipit laudantium!
          </h3>
        </TitleBox>
        <ListWrap>
          <ul>
            <ListBox>
              <a href="https://kimahr.github.io/kimahreum/movie-list">
                리액트 프로젝트
              </a>
            </ListBox>
            <ListBox>
              <a href="#">리액트 프로젝트</a>
            </ListBox>
            <ListBox>
              <a href="#">리액트 프로젝트</a>
            </ListBox>
          </ul>
        </ListWrap>
      </Wrap>
    </Container>
  );
}

export default SectionProject;

const Container = styled.div`
  width: 100%;
  height: 45vw;
  max-width: 1400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white_color};

  position: relative;
`;

const Wrap = styled.div`
  width: 100%;
  height: 45vw;
  max-width: 1400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white_color};

  position: relative;
`;

const Title = styled.div`
  margin-top: 140px;
  h2 {
    font-weight: ${({ theme }) => theme.fonts.weightExtra};
    color: ${({ theme }) => theme.colors.black_color};
    margin-bottom: 60px;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h4 {
    width: 50%;
    width: 100%;

    font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
    color: #000;
    font-size: 60px;
    margin-top: 20px;
    line-height: 120%;
  }
  h3 {
    width: 70%;
    font-weight: ${({ theme }) => theme.fonts.weightSemiRegular};
    color: #000;
    font-size: ${({ theme }) => theme.fonts.fontRegular};
    line-height: 160%;
    margin-top: 60px;
  }
`;

const ListWrap = styled.div`
  width: 100%;
  height: 50%;

  margin-top: 140px;
  ul {
    width: 100%;
    display: flex;
    text-align: center;
  }
`;

const ListBox = styled.div`
  width: 33.333%;
  height: 500px;
  margin-left: 20px;
  border: 1px solid black;
  transition: all 0.3s;
  :first-child {
    margin-left: 0;
  }
  :hover {
    border-radius: 30%;
  }
`;
