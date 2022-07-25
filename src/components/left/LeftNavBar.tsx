import styledComponents from "styled-components";
import image_leftBg from "../../img/image_leftBg.png";
import { LeftNavList, list } from "../../data/D_LeftNavList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPopup from "../popup/ContactPopup";
import PopupBg from "../common/PopupBg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectMenu } from "../../reducers/common";

const LeftNavBar = () => {
    const navigate = useNavigate();
    const [contactPopup, setContactPopup] = useState(false);

    const selectMenu = useSelector((state : any) => state.common.selectMenu);
    const dispatch = useDispatch();

    const buttonEvent = (navMenu: LeftNavList) => {
        switch(navMenu.eventType){
            case "routing":
                navigate(navMenu.url?navMenu.url:"");
                dispatch(setSelectMenu(navMenu.id));
                break;
            case "popup":
                if(navMenu.id === "contact") setContactPopup(true);
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
                    <div className="portfolio" onClick={() => {navigate("/")}}>
                        <div>PORT</div>
                        <div>FOLIO</div>
                    </div>
                    <nav>
                        <ul>
                            {list.map((v: LeftNavList, i : number) => (
                                <li key={i} className={v.id === selectMenu ? "on" : ""}>
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
    width: 9.6vw;
    height: 100%;
    display: inline-block;
    position: fixed;
    z-index: 50;
    font-family: Arial,Helvetica,sans-serif;

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

        .portfolio{
            padding-top: 30%;
            text-align: center;
            font-size: 1.3rem;
            font-weight: 900;

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
                    text-align: center;
                    font-size: 13px;

                    button{
                        letter-spacing: 0.2rem;
                    }
                }

                .on{
                    color: #ffffff;
                }
            }
        }
    }
`;

export default LeftNavBar;