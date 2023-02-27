import styled from "styled-components";
import SectionAbout from "./section/SectionAbout";
import SectionMain from "./section/SectionMain";
import SectionSkills from "./section/SectionSkills";
import SectionDevelop from "./section/SectionDevelop";
import Animation from "./section/Animation";
import SectionProject from "./section/SectionProject";
import SectionClose from "./section/SectionClose";

function Main() {
  return (
    <Container>
      <SectionMain />
      <SectionAbout />
      {/* <SectionSkills /> */}
      <SectionDevelop />
      <Animation />
      <SectionProject />
      <SectionClose />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
