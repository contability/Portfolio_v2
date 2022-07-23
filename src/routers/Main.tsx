import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";
import image_react from "../img/image_react.jpg";
import image_blockchain from "../img/image_blockchain.png";
import image_css from "../img/image_css.png";
import image_html from "../img/image_html.jpg";
import image_java from "../img/image_java.png";
import image_js from "../img/image_js.png";
import image_leftBg from "../img/image_leftBg.png";
import image_cassette from "../img/image_cassette.jpg";
import image_icecream from "../img/image_icecream.png";
import image_clothes from "../img/image_clothes.jpg";
import image_perfume from "../img/image_perfume.jpg";



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
                        <img src={image_cassette} alt="" className="cassette" />
                        <img src={image_clothes} alt="" className="clothes" />
                        <img src={image_perfume} alt="" className="perfume"/>
                    </article>
                    <article className="postContents">
                        <div className="firstSection">
                            <div className="firstPanel">
                                <img src={image_icecream} alt="" />
                            </div>
                            <div className="colFlex">
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                            <div className="secondPanel"></div>
                        </div>
                        <div className="secondSection">
                            <p>
                                <img src={image_html} alt="" className="i_html" />
                            </p>
                            <p></p>
                        </div>
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
                        100vh,
                        0px
                        );
                }

                & > .perfume{
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
                    height: 741.3px;
                        .firstPanel{
                            width: 191px;
                            background: #4aad8c;
                        }

                        p{
                            
                            &:nth-child(1){
                                height: 400px;
                                background: #ffd942;
                            }
                            
                            &:nth-child(2){
                                height: 200px;
                                background: #fffaae;
                            }

                            &:nth-child(3){
                                background: #fd4f55;
                                height: 141.3px;
                            }
                        }

                        .secondPanel{
                            flex: 1;
                        }
                }
                .secondSection{
                    display: flex;

                }

                .colFlex{
                    display:flex;
                    flex-direction: column;
                    width: 46vw;
                }
            }
        }
    }
`;

export default Main;