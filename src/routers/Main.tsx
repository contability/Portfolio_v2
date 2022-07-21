import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";
import image_react from "../img/image_react.jpg";
import image_blockchain from "../img/image_blockchain.png";
import image_css from "../img/image_css.png";
import image_html from "../img/image_html.png";
import image_java from "../img/image_java.png";
import image_js from "../img/image_js.png";
import image_leftBg from "../img/image_leftBg.png";
import image_do from "../img/image_do.jpg";
import image_cassette from "../img/image_cassette.jpg";
import image_icecream from "../img/image_icecream.png";
import image_clothes from "../img/image_clothes.jpg";



const Main = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(0);

    // useEffect(() => {
    //     console.log(scrollY);
        
    // }, [scrollY]);

    window.addEventListener("scroll", () => {
        scrollRef.current = window.scrollY;
        console.log(scrollRef.current);
        
    });

    return(
        <MainBox 
        scrollRef={scrollRef.current}
        >
            <div className="wrapped">
                <header>
                    <div onClick={()=>navigate("/")}>PORTFOLIO</div>
                    <div>SINHYUNGJUNG</div>
                </header>
                <article>
                    <img className="imgReact" src={image_react} alt="" />
                    <img src={image_do} alt="" className="do" />
                    <img src={image_cassette} alt="" className="cassette" />
                    <img src={image_clothes} alt="" className="clothes" />
                </article>
            </div>
        </MainBox>
    );
};

const MainBox : any = styledComponents.main`
    width: 100%;
    height: 100vh;
    z-index: 0;
    
    .wrapped{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        header{
            height: 35vh;
            background: #181818;
            color: #ffffff;
            text-align: center;
            font-family: Arial,Helvetica,sans-serif;
            top: 0;
            z-index: 1;
            
            & > div{
                letter-spacing: 2rem;
                padding-left: 10px;
            }

            & > div:first-child{
                padding-top: 12vh;
                font-size: 4rem;
                letter-spacing: 1rem;
                font-weight: 900;
                padding-left: 0px;
                cursor: pointer;
            }
        }
        
        article{
            & > .imgReact{
                width: 91vw;
                top: 0;
                position: fixed;
                z-index: 0;
                clip: rect(
                    0px, 
                    91vw, 
                    500px,
                    0px);
            }

            & > .do{
                width: 15%;
                right: 0;
            }

            & > .cassette{
                width: 52vw;
            }

            & > .clothes{
                width: 52vw;
            }
        }
    }
`;

export default Main;