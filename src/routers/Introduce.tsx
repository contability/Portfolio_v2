import { useState } from "react";
import styledComponents from "styled-components";
import FilteredImage from "../components/common/FilteredImage";
import LeftNavBar from "../components/left/LeftNavBar";
import { D_skills } from "../data/D_Skills";
import furium1 from "../img/image_furium1.jpg";
import furium1_e from "../img/image_furium1_edit.jpg";
import furium2 from "../img/image_furium2.jpg";
import profile2 from "../img/image_profile2.jpg";

const Introduce = () => {
    const [subImg, setSubImg] : any = useState(false);
    const hoverEventHandler = (type: string) => {
        const isEnter : Boolean = type === "mouseenter" ? true: false;
        setSubImg(isEnter);
    };

    return(
        <IntroduceBox>
            <aside className="left">
                <h1>Skills</h1>
                <div className="skills">
                    {D_skills.map((v: any, i) => (
                        <p key={i} className="skill">
                            <p>{v.id}</p>
                            <p>
                                <input type="range" className="rangeInput" value={v.amount} max="100"/>
                            </p>
                        </p>
                    ))}
                </div>
            </aside>
            <aside className="right">
                <article className="header">
                    <div>Hello</div>
                    <div>I'm SinHyung Jung</div>
                </article>
                <article className="profile_img">
                        <img className={"mainImg"} src={profile2} alt="" 
                        onMouseEnter={(e : any) => hoverEventHandler(e.type) } 
                        onMouseLeave={(e : any) => hoverEventHandler(e.type) }
                        />
                        {/* <FilteredImage targetImg={furium2}/> */}

                        {subImg && (
                            <img className="subImg" src={furium2} alt="" 
                            onMouseEnter={(e : any) => hoverEventHandler(e.type) } 
                            onMouseLeave={(e : any) => hoverEventHandler(e.type) }
                            />
                        )}
                </article>
                <article className="blahblah">
                    <div>
                        2년차 개발자로 GIS 프로젝트 SI/SM 업무를 수행 해왔고
                        요구사항 기술부터 설계, 구현, 테스트, 배포, 유지보수까지 전반적인 개발 업무를 진행 하였습니다.
                        <br /><br />
                        저의 가장 큰 무기라고 생각하는 것은 꾸준함입니다.
                        <br /><br />
                        끊임 없이 변화하는 개발 직군에서 가장 필요한 것 또한 꾸준함이라고 생각하며
                        지금 당장은 모자랄 수 있겠지만 지금도, 앞으로도 저의 무기로
                        누구보다 빠르게 적응하여 주위에 도움이 되는 동료가, 그리고 제자리에 멈춰있지 않는 개발자가 되고자 합니다.
                    </div>
                </article>
            </aside>
        </IntroduceBox>
    );
};

const IntroduceBox = styledComponents.main`
    width: 100%;
    min-height: 100vh;
    z-index: 0;
    background: #FFF2BB;
    display: flex;

    .left{
        width: 20.971386vw;
        min-height: inherit;
        padding: 3%;
        height: 100vh;
        z-index: 1;
        background: black;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5vh;
        overflow-y: auto;

        .skills{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2vh;
            width: 100%;

            .skill{
                width: 100%;

                p{
                    .rangeInput {
                        -webkit-appearance: none;
                        width: 100%;
                        height: 4px;
                        margin: 20px 0;
                        background: linear-gradient(
                            90deg,
                            rgba(193, 227, 214, 0) 0%,
                            rgba(193, 227, 214, 0.5) 100%
                        );
                        border-radius: 8px;

                        &::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            width: 14px;
                            background: rgba(
                                235,
                                77,
                                78,
                                0
                            );

                            //가운데 똥그란거
                            border: 1px solid rgba(193, 227, 214, 1);
                            border-radius: 50%;
                            box-shadow: 0px 0px 6px
                            rgba(255, 83, 83, 0);
                        }
                    }
                }
                
            }
        }
    }

    .right{
        flex: 1;
        height: 100vh;
        padding: 2.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10vh;
        overflow-y: auto;
        font-family: Arial,Helvetica,sans-serif;
        

        .header{
            font-size: 4rem;
            letter-spacing: 1rem;
            font-weight: 900;
        }

        .profile_img{
            height: 58vh;
            width: 45vw;
            display: flex;
            flex-direction: column;
            align-items: center;

            .mainImg{
                height: 58vh;
                position: relative;
                box-shadow: 9px 13px 6px #00000029;
            }

            .subImg{
                height: 38vh;
                left: -0.1vw;
                bottom: 39vh;
                position: relative;
            }
        }

        .blahblah{
            line-height: 1.9;
            width: 45vw;

            & > div{
                word-break: break-word;
                font-weight: 500;
            }
        }
    }
`;

export default Introduce;