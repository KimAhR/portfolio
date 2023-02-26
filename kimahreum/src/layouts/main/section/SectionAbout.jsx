import styled from "styled-components";

function SectionAbout() {
  return (
    <Container>
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
        <CircleText>
          Exercitationem doloremque accusantium itaque, sint, amet vero quis
        </CircleText>
      </Wrap>
    </Container>
  );
}

export default SectionAbout;

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
    color: ${({ theme }) => theme.colors.black_color};
  }
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AboutBox = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 10%;
  left: 0;

  border-radius: 20%;

  background-color: ${({ theme }) => theme.colors.gray_color};
`;

const TextBox = styled.div`
  padding: 10%;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fonts.fontMedium};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
`;

const CircleText = styled.text`
  position: absolute;
  top: 100px;
  right: 100px;

  width: 25%;
  height: 35%;

  font-weight: ${({ theme }) => theme.fonts.weightBold};
  font-size: ${({ theme }) => theme.fonts.fontMedium};
  line-height: 24px;
`;
