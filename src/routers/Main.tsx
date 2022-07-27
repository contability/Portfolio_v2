import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import image_react from "../img/image_react.jpg";
import img_react from "../img/image_react.png";
import image_blockchain from "../img/image_blockchain.png";
import image_css from "../img/image_css.png";
import image_html from "../img/image_html.png";
import image_java from "../img/image_java.png";
import image_js from "../img/image_js.png";
import image_cassette from "../img/image_cassette.jpg";
import image_icecream from "../img/image_icecream.png";
import image_clothes from "../img/image_clothes.jpg";
import image_perfume from "../img/image_perfume.jpg";
import { useDispatch } from "react-redux";
import { setSelectMenu } from "../reducers/common";
import { Link } from "react-router-dom";



const Main = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(0);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(scrollY);
        
    // }, [scrollY]);

    window.addEventListener("scroll", () => {
        scrollRef.current = window.scrollY;
        console.log(scrollRef.current);
        
    });

    useEffect(()=>{
        dispatch(setSelectMenu(""));
    }, []);

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
                                <p>
                                    <img className="hoverTarget" src={image_js} alt="" />
                                </p>
                                <p>
                                    <p>is a client,</p>
                                    <p>server,</p>
                                    <p>developer at heart</p>
                                </p>
                                <p>let's work together!</p>
                            </div>
                            <div className="secondPanel">
                                <p>
                                    <p>about me</p>
                                    <p>
                                        <Link to="/introduce" style={{textDecoration: "underline"}}>check it out</Link>
                                    </p>
                                </p>
                                <p>1/5</p>
                            </div>
                        </div>
                        <div className="secondSection">
                            <p className="panelHtml">
                                <img src={image_html} alt="" className="i_html hoverTarget" />
                            </p>
                            <p className="panelReact">
                                <img src={img_react} alt="" className="i_react hoverTarget" />
                            </p>
                            <div className="secondPanel">
                                <p>
                                    <p>NFT Market</p>
                                    <p>
                                        <Link to="/introduce" style={{textDecoration: "underline"}}>take a look</Link>
                                    </p>
                                </p>
                                <p>2/5</p>
                            </div>
                        </div>
                        <div className="thirdSection">
                            <p className="panelBlockChain">
                                <img src={image_blockchain} alt="" />
                            </p>
                            <p className="panelJs">
                                <img src={image_css} alt="" />
                            </p>
                        </div>
                    </article>
                </section>
            </div>
        </MainBox>
    );
};

const MainBox : any = styledComponents.main`
    width: 100%;
    height: inherit;
    z-index: 0;
    // overflow-y: auto;
    overflow-y: none;
    
    .wrapped{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        .hoverTarget{
            transition-duration: 0.3s;

            &:hover{
                padding: 3%;
            }
        }

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
                    // height: 71.4vh;

                    .colFlex{
                        display:flex;
                        flex-direction: column;
                        width: 46vw;

                        & > p{
                            color: #181818;
                            &:nth-child(1){
                                height: 400px;
                                background: #ffd942;
                                padding: 1.5rem;

                                img{
                                    width: 100%;
                                    // width: 835.188;
                                    height: 195%;
                                }
                            }
                            
                            &:nth-child(2){
                                height: 200px;
                                background: #fffaae;
                                font-size: 1.7rem;
                                font-weight: 900;
                                letter-spacing: 0.6vw;
                                padding: 2rem;
                            }

                            &:nth-child(3){
                                background: #fd4f55;
                                height: 141.3px;
                                // padding-top: 70px;
                                font-size: 1.3rem;
                                font-weight: 500;
                                padding-top: 3.3rem;
                            }
                        }
                    }

                    .firstPanel{
                        width: 191px;
                        background: #4aad8c;
                        
                        & > img{
                            width: inherit;
                        }
                    }

                    .secondPanel{
                        flex: 1;
                        display:flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-start;
                        color: #ffffff;
                        font-size: 1.7rem;
                        font-weight: 900;
                        letter-spacing: 0.6vw;
                        padding: 3%;
                    }
                }
                //first section end
                
                //second section start
                .secondSection{
                    display: flex;
                    flex-direction: row-reverse;
                    // height: 180.875px;
                    height: 276.625px;
                    color: #ffffff;

                    & > p{
                        // height: 52vh;
                        height: 100%;
                        text-align: center;
                        display: flex;
                        align-items: center; 
                        color: #ffffff;
                        
                        img{
                            height: 80%;
                        }
                    }

                    .panelHtml{
                        // width: 35%;
                        // height: 45vh;
                        height: 100%;
                        background: #ffd942;

                        .i_html{
                            // width: 398px;
                            height: 100%;
                        }
                    }

                    .panelReact{
                        background: #fffaae;
                        // height: 45vh;
                    }
                }
                // second section end

                // third section start
                .thirdSection{
                    height: 180.875px;
                    display: flex;

                    p{
                        img{
                            height: 100%;
                        }
                    }
                    
                }
                
            }
        }
    }
`;

export default Main;