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
                <section>
                    <article className="imgContents">
                        <img className="imgReact" src={image_react} alt="" />
                        <img src={image_do} alt="" className="do" />
                        <img src={image_cassette} alt="" className="cassette" />
                        <img src={image_clothes} alt="" className="clothes" />
                    </article>
                    <article className="postContents">
                        <div className="firstSection">
                            <div className="firstPanel">first</div>
                            <div className="colFlex">
                                <p>weg</p>
                                <p>weg</p>
                                <p>weg</p>
                            </div>
                            <div className="secondPanel">last</div>
                        </div>
                        <div className="secondSection">wegweg</div>
                    </article>
                </section>
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
            z-index: 10;
            
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
        
        section{
            .imgContents{
                & > .imgReact{
                    width: 91vw;
                    top: 0;
                    position: fixed;
                    z-index: 3;
                    clip: rect(
                        0px, 
                        91vw, 
                        500px,
                        0px
                        );
                }

                & > .do{
                    width: 15%;
                    right: 0;
                    position: fixed;
                }

                & > .cassette{
                    width: 52vw;
                    position: fixed;
                }

                & > .clothes{
                    width: 52vw;
                    position: fixed;
                }
            }

            .postContents{
                z-index: 10;
                width: 100%;
                display: flex;
                position: absolute;
                flex-direction: column;
                .firstSection{
                    display: flex;
                    background: grey;
                    //TODO: 삭제 필요
                    // height: 100vh;
                        .firstPanel{
                            width: 33vw;
                        }

                        p{
                            
                            &:nth-child(0){
                                height: 10vh;
                                background: yellow;
                                width: 33vw;
                            }
                            
                            &:nth-child(1){
                                // width: 10vw;
                                height: 29vh;
                            }
                        }
                }
                .secondSection{
                    background: white;
                }

                .colFlex{
                    display:flex;
                    flex-direction: column;
                }
            }
        }
    }
`;

export default Main;