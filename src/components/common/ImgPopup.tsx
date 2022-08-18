import styled from "styled-components";

const ImgPopup = ({content} : any) => {

    return(
        <ImgPopupBox>
            <img src={content} alt="" />
        </ImgPopupBox>
    );
};

const ImgPopupBox = styled.div`
    position: fixed;
    width: 100%
    height: 100%;
    z-index: 52;
    left: 13%;
    top: 10%;

    > img{
        width: 80vw;
        border-radius: 5px;
    }
`;

export default ImgPopup;