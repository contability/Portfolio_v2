import { useEffect } from "react";
import styled from "styled-components";

const MessagePopup = ({ off, visible} : any) => {

    useEffect(() => {
        if(visible){
            setTimeout(() => {
                off();
            }, 4000);
        }
    }, [visible]);

    return (
        <MessagePopupBox>
            <p className={`messageBox hidden ${visible? "appear":"disappear"}`}>
                copied success to clipBoard
            </p>
        </MessagePopupBox>
    );
};

const MessagePopupBox = styled.div`
    width: 600px;
    height: 50px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: -35px;
    position: fixed;

    p{
        height: inherit;
        padding-top: 12px;
        text-align: center;
    }

    .hidden{
        visibility: hidden;
        opacity: 0;
        transition: visibility 1s, opacity 0.5s linear;
    }

    .appear{
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity 0.5s linear;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        color: #FFFFFF;
    }
`;

export default MessagePopup;