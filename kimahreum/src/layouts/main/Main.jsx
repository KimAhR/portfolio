import styled from "styled-components";
import SectionAbout from "./section/SectionAbout";
import SectionMain from "./section/SectionMain";
import SectionSkills from "./section/SectionSkills";

function Main() {
  return (
    <Container>
      <SectionMain />
      <SectionAbout />
      <SectionSkills />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
