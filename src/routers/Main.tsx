import { useEffect, useRef, useState } from "react";
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
import image_db from "../img/image_db.png";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { setSelectMenu } from "../reducers/common";
import { Link } from "react-router-dom";

import project01 from "../img/projects/image_projects_1_1.jpg";
import project02 from "../img/projects/image_projects_2_1.png";
import project03 from "../img/projects/image_projects_3_1.png";
import project04 from "../assets/movie/mov_project_4.mp4";

const Main = () => {
    const navigate = useNavigate();
    // const scrollRef = useRef(0);
    const dispatch = useDispatch();

    // const clipStyle01 = 
    // clip: rect(
    //     0px, 
    //     91vw, 
    //     100vh,
    //     0px
    // );


    // useEffect(() => {
    //     console.log(scrollRef.current);
    // }, [window.scrollY]);

    window.addEventListener("scroll", () => {
        // scrollRef.current = window.scrollY;
        console.log(document.documentElement.scrollTop);
    });

    // useEffect(() => {
    //     console.log("weflkn");
        
    // }, [window]);

    const scroll = (e : any) => {
        console.log(e);
    };

    

    useEffect(()=>{
        dispatch(setSelectMenu(""));

        window.addEventListener("scroll", () => {
            // scrollRef.current = window.scrollY;
            console.log(document.documentElement.scrollTop);
        });
    }, []);

    return(
        <MainBox 
        // scrollRef={scrollRef.current}
        onScroll={(e : any) => scroll(e)}
        >
            <div className="wrapped">
                <header>
                    <div onClick={()=>navigate("/")}>PORTFOLIO</div>
                    <div>SINHYUNGJUNG</div>
                </header>
                <section>
                    <article className="imgContents">
                        {/* <img className="imgReact" src={image_react} alt=""/> */}
                        {/* <img src={project01} alt="" className="project01" /> */}
                        {/* <img src={project02} alt="" className="project02" /> */}
                        {/* <img src={project03} alt="" className="project03"/> */}
                        <video className="project04" autoPlay={true} loop={true}>
                            <source src={project04} type="video/mp4"/>
                        </video>
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
                                <div>
                                    <p>is a client,</p>
                                    <p>server,</p>
                                    <p>developer at heart</p>
                                </div>
                                <div>
                                    {/* 
                                        react-fast-marquee 태그 사용
                                        loop : 0    // 무한
                                        gradient    //그라데이션 사용 여부
                                    */}
                                    <Marquee loop={0} speed={100} gradient={false}>
                                        let's work together!
                                    </Marquee>
                                </div>
                            </div>
                            <div className="secondPanel">
                                <p>
                                    <span>about me</span>
                                    <span className={"blockSpan"}>
                                        <Link to="/introduce" style={{textDecoration: "underline"}}>check it out</Link>
                                    </span>
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
                                    <span>GIS</span>
                                    <span className={"blockSpan"}>
                                        <Link to="/projects" style={{textDecoration: "underline"}}>take a look</Link>
                                    </span>
                                </p>
                                <p>2/5</p>
                            </div>
                        </div>
                        <div className="thirdSection">
                            <div className={"firstPanel"}>
                                <p className="panelBlockChain">
                                    <img src={image_blockchain} alt=""  className={"hoverTarget"}/>
                                </p>
                                <div className="colFlex">
                                    <div className="seperatorFlex">
                                        <div className="toLetter">
                                            <p>
                                                <span>NFT Market</span>
                                                <span className={"blockSpan"}>
                                                    <Link to="/projects" style={{textDecoration: "underline"}}>take a look</Link>
                                                </span>
                                            </p>
                                            <p>3/5</p>
                                            
                                        </div>
                                        <p className="seperator"></p>
                                    </div>
                                    <p className="panelCss">
                                        <img src={image_css} alt="" className={"hoverTarget"}/>
                                    </p>
                                </div>
                            </div>
                            <div className="secondPanel">
                                <div className={"toLetter h_100"}>
                                    <p>
                                        <span>DeFi</span>
                                        <span className={"blockSpan"}>
                                            <Link to="/projects" style={{textDecoration: "underline"}}>take a look</Link>
                                        </span>
                                    </p>
                                    <p>4/5</p>
                                </div>
                                <div className="marquee_wrap">
                                    <Marquee loop={0} speed={100} gradient={false}>
                                        let's work together!
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                        {/* 
                            .fourthSection{
                                .firstPanel{
                                    .toLetter{

                                    }
                                }
                                .secondPanel{
                                    flex: 1;
                                    height: 100%;

                                    img{
                                        height: 100%;
                                    }
                                }
                            }
                        */}
                        <div className="fourthSection">
                            <div className="firstPanel">
                                <div className="toLetter">
                                    <p>
                                        <span>exchange</span>
                                        <span className={"blockSpan"}>
                                            <Link to="/projects" style={{textDecoration: "underline"}}>take a look</Link>
                                        </span>
                                    </p>
                                    <p>5/5</p>
                                </div>
                            </div>
                            <div className="secondPanel">
                                <img src={image_db} alt=""  className="hoverTarget"/>
                            </div>
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
    overflow-y: auto;
    // overflow-y: none;

    // react-fast-marquee css.
    // 이렇게 클래스 먹여서 속성 주면 알아서 먹음.
    .marquee-container {
        width: 100%;
        color: #000;
        margin-top: 15px;
        overflow: hidden;
        padding: 15px 30px;
        letter-spacing: 0.7rem;

        &:first-child {
            margin-top: 0;
        }

        .text {
            margin: 0 25px;
            font-size: 44px;
            white-space: nowrap;
        }
    }

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

        .toLetter{
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

            .seperator{
                background: #fffaae;
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
                    // height: 100%;
                    top: 0;
                    position: fixed;
                    z-index: 6;
                    clip: rect(
                        0px, 
                        91vw, 
                        100vh,
                        0px
                    );
                }

                & > .project04{
                    z-index: 5;
                    top: 0;
                    position: fixed;
                    // width: 91vw;
                    height: 100%;
                }

                & > .project03{
                    height: 100%;
                    right: 0;
                    position: fixed;
                    z-index: 4;
                    top: 0;
                }
                
                & > .project01{
                    z-index: 3;
                    height: 100%;
                    position: fixed;
                    top: 0;
                }
                
                & > .project02{
                    z-index: 2;
                    height: 100%;
                    position: fixed;
                    top: 0;
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

                    .colFlex{
                        display:flex;
                        flex-direction: column;
                        width: 46vw;

                        & > div{
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
                                padding: 2rem;
                                font-size: 1.3rem;
                                font-weight: 500;
                                padding-top: 3.3rem;
                            }
                        }

                        & > p{
                            color: #181818;
                            &:nth-child(1){
                                height: 400px;
                                background: #ffd942;
                                padding: 1.5rem;

                                img{
                                    width: 100%;
                                    height: 195%;
                                }
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
                        color: #ffffff;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center; 
                        
                        img{
                            height: 80%;
                        }
                    }

                    .panelHtml{
                        height: 100%;
                        width: 21vw;
                        background: #ffd942;

                        .i_html{
                            height: 100%;
                        }
                    }

                    .panelReact{
                        background: #fffaae;
                        width: 20vw;
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
                // second section end

                // third section start
                .thirdSection{
                    height: 577px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;

                    .firstPanel{
                        display: flex;
                        flex-direction: column;
                        height: 100%;

                        p{
                            img{
                                height: 100%;
                            }
                        }

                        .panelBlockChain{
                            background: #4aad8c;
                            width: 49.4vw;
                            height: 33%;
                            text-align: center;
                        }

                        .colFlex{
                            display: flex;
                            flex-direction: row;
                            height: 67%;

                            .seperatorFlex{
                                display: flex;
                                flex-direction: column;
                                width: 47%;

                                .seperator{
                                    background: #fffaae;
                                    width: 100%;
                                    height: 40%;
                                }
                            }
                        }

                        .panelCss{
                            height: 100%;
                            flex: 1;
                            background: #ffd942;
                            text-align: center;
                            padding: 2%;

                            img{
                                height: 100%;
                            }
                        }
                    }

                    .secondPanel{
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        flex: 1;

                        .marquee_wrap{
                            background: #fffaae;
                            height: 91.3px;
                            padding: 1rem;
                            font-size: 1.3rem;
                            font-weight: 500;
                            // padding-top: 3.3rem;
                        }
                    }

                    .h_100{
                        height: 100%;
                    }
                }
                // end thirdSection

                .fourthSection{
                    height: 400px;
                    display: flex;

                    .firstPanel{
                        width: 63vw;
                        // height: 100%;
                        display: flex;
                        .toLetter{

                        }
                    }
                    .secondPanel{
                        flex: 1;
                        height: 100%;
                        background: #ffd942;
                        text-align: center;
                        padding: 2%;

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