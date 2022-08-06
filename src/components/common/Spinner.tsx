import styled from "styled-components";
import I_spinner from "../../assets/common/spinner.png";

const Spinner : Function = () => {

    return (
        <SpinnerBox>
            <img src={ I_spinner } alt="" />
        </SpinnerBox>
    );
};

const SpinnerBox = styled.div`

    position: fixed;
    top: 50%;
    left: 50%;
    height: 75px;
    z-index: 10;

    img{
        animation: rotate_img 1s ease-in-out infinite;
        transform-origin: 50% 50%;
        height: 100%;
    }

    @keyframes rotate_img {
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Spinner;