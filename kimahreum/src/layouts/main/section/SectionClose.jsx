import styled from "styled-components";

function SectionClose() {
  return (
    <Container>
      <Wrap>
        <ImgList>
          <Img01>
            <img className="cilcle_01" alt="circle_bg" src="img/Ellipse5.png" />
          </Img01>
          <Img02>
            <img className="cilcle_02" alt="circle_bg" src="img/Ellipse6.png" />
          </Img02>
          <Img03>
            <img className="cilcle_03" alt="circle_bg" src="img/Ellipse9.png" />
          </Img03>
          <Img04>
            <img className="cilcle_04" alt="circle_bg" src="img/Ellipse8.png" />
          </Img04>
        </ImgList>
        <TextBox>
          <p>Thank you for taking your time for my portfolio. </p>
        </TextBox>
      </Wrap>
    </Container>
  );
}

export default SectionClose;

const Container = styled.div`
  width: 100%;
  height: 40vw;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.gray_color};

  position: relative;
`;

const Wrap = styled.div`
  width: 60%;
  height: 100%;
  margin: 10% auto;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  position: absolute;
  z-index: 3;
  p {
    width: 50%;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fonts.fontExtra};
    font-weight: ${({ theme }) => theme.fonts.weightSemiRegular};
  }
`;

const ImgList = styled.div`
  top: 50%;
  left: -50%;
  z-index: 1;
`;

const Img01 = styled.span`
  position: absolute;
  left: 35%;
  bottom: 20%;
`;

const Img02 = styled.span`
  position: absolute;
  top: 20%;
  right: 5%;
`;
const Img03 = styled.span`
  position: absolute;
  top: 40%;
  right: 0;
`;
const Img04 = styled.span`
  position: absolute;
  bottom: 20;
  left: 0;
`;
