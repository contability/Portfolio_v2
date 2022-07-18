import styledComponents from "styled-components";
import image_leftBg from "../../img/image_leftBg.png";
import { LeftNavList, list } from "../../data/D_LeftNavList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPopup from "../popup/ContactPopup";
import PopupBg from "../common/PopupBg";

const LeftNavBar = () => {
    const navigate = useNavigate();
    const [contactPopup, setContactPopup] = useState(false);

    const buttonEvent = (navMenu: LeftNavList) => {
        switch(navMenu.eventType){
            case "routing":
                navigate(navMenu.url?navMenu.url:"");
                break;
            case "popup":
                if(navMenu.id === "Contact") setContactPopup(true);
                break;
            case "link":
                window.open(navMenu.url?navMenu.url:"");
                break;
            default:
                break;
        }
    };
    return (
        <LeftNavBarBox>
                <picture>
                    <img src={image_leftBg} alt="" />
                </picture>
                <div className="menuContent">
                    <strong onClick={() => {navigate("/")}}>PORTFOLIO</strong>
                    <nav>
                        <ul>
                            {list.map((v: LeftNavList, i : number) => (
                                <li key={i}>
                                    <button onClick={()=>{buttonEvent(v)}}>{v.id}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                
                {contactPopup && (
                    <>
                        <ContactPopup off={setContactPopup}/>
                        <PopupBg off={setContactPopup} blur={true}/>
                    </>
                )}
        </LeftNavBarBox>
    );
};

const LeftNavBarBox = styledComponents.section`
    width: 110px;
    height: 100%;
    display: inline-block;
    position: fixed;
    z-index: 10;

    & > picture{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;

        & > img{
            height: 100%;
            width: 100%;
        }
    }

    .menuContent{
        display: flex;
        position: absolute;
        z-index: 1;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;

        strong{
            padding: 10%;

            &:hover{
                transform: translate(0px, 10px) rotate(-15deg);
                cursor: pointer;
            }
        }

        nav{
            ul{
                li{
                    padding: 10%;
                    border-bottom: 1px solid black;
                }
            }
        }
    }
`;

export default LeftNavBar;