import styled from "styled-components";

const ImgPopup = ({ content }: any) => {
  return (
    <ImgPopupBox>
      <img src={content} alt="" />
    </ImgPopupBox>
  );
};

const ImgPopupBox = styled.div`
  position: fixed;
  width: 100%;
  height: 80%;
  z-index: 52;
  left: 13%;
  overflow-y: auto;
  top: 10%;

  > img {
    width: 80vw;
    border-radius: 10px;
  }
`;

export default ImgPopup;
