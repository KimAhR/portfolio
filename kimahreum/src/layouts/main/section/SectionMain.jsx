import styled from "styled-components";

function SectionMain() {
  return (
    <Container>
      <Wrap>
        <h2>PORTFOLIO</h2>
        <div>
          <p>KIM AH REUM</p>
          <span>FRONT-END DEVELOPER</span>
        </div>
      </Wrap>
    </Container>
  );
}

export default SectionMain;

const Container = styled.div`
  width: 100%;
  height: 40vw;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: #fff;
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;
  h2 {
    font-size: ${({ theme }) => theme.fonts.fontMedium};
  }
  div {
    font-size: 100px;
  }
`;
