import { useState } from "react";
import styledComponents from "styled-components";
import { D_skills } from "../data/D_Skills";
import furium2 from "../img/image_furium2.jpg";
import profile from "../img/image_profile.jpg";

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
                            <span>{v.id}</span>
                            <span className={"blockSpan"}>
                                <input type="range" className="rangeInput" defaultValue={v.amount} max="100"/>
                            </span>
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
                        <img className={"mainImg"} src={profile} alt="" 
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
                        2년차 개발자로 GIS 프로젝트와 블록체인 SI/SM 업무를 수행 해왔고
                        요구사항 기술부터 설계, 구현, 테스트, 배포, 유지보수까지 전반적인 개발 업무를 진행 하였습니다.
                        <br /><br />
                        저의 가장 큰 무기라고 생각하는 것은 꾸준함입니다.
                        <br />
                        끊임 없이 변화하는 개발 직군에서 가장 필요한 것 또한 꾸준함이라고 생각하며
                        지금 당장은 모자랄 수 있겠지만 지금도, 앞으로도 저의 무기로
                        누구보다 빠르게 적응하여 주위에 도움이 되는 동료가, 그리고 제자리에 멈춰있지 않는 개발자가 되고자 합니다.
                    </div>
                    <br />
                    <div>
                        <h2>[ 새로운 환경에 빠르게 적응하는 적응력 ]</h2>
                        <p>새로운 환경을 접할 수 있는 기회가 많아 자연스럽게 빠른 적응 능력을 가질 수 있었습니다. 쇼핑몰에서 고객을 응대하는 업무를 수행하게 된 적이 있는데 처음에는 부담이 되었지만 금방 익숙해지고 클레임 없이 고객들을 대하게 되었고 어느새 대표 부재시에도 총괄 업무를 맡아 성공적으로 회사를 임시 운영하여 정말 업무에 잘 적응한다는 적응력을 칭찬받기도 하며 자신감을 얻는 일이 있었고 이 기억은 지금까지도 저에게 큰 자산으로 남아있습니다.</p>
                        <p>개발자는 하나의 프로젝트가 아닌 계속적으로 새로운 프로젝트에 투입되며 팀으로 업무를 진행해야 하는 경우도 있습니다. 이러한 빠른 적응력을 통해 사람들과 잘 어우러지고 맡은 업무에 대해서도 빨리 습득하는 귀사의 직원이 될 수 있을 것이라고 확신합니다.</p>
                    </div>
                    <br />
                    <div>
                        <h2>[ 신뢰를 주는 사람 ]</h2>
                        <br />
                        <p>사람들에게 신뢰를 줄 수 있는 점이 저의 장점입니다. 군 복무 당시 후임 한 명이 사정 상 의가사 전역을 하게 되었고 그런 그를 돕기 위해 부대에서 모금을 한 적이 있습니다. 약 120만원의 금액을 제가 맡아서 전달하게 되었으나 연락이 원활하지 않아 2년 가량 모금한 돈을 보관하게 되었습니다. 계속해서 책임감을 가지고 연락을 취해 후임에게 전달하고, 부대원들에게도 소식을 전하니 저의 책임감을 높이 사며 정말 신뢰가 가는 사람이라는 평을 듣기도 했습니다. 개발자로서, 또한 귀사의 신입사원으로서도 신뢰를 주는 직원이 될 수 있도록 노력하겠습니다.</p>
                        <br />
                        <p>반면에 학창시절의 저는 기대에 부흥하기 위해 뭐든지 잘하는 사람이어야 했고 착한 사람이어야 한다는 생각에 감정을 숨기며 참는 습관이 있었습니다. 그로 인해 남들의 부탁을 잘 거절하지 못하고 다른 사람들이 꺼려하는 일을 도맡아 하기도 했습니다. 이러한 단점을 극복하려고 많은 책들을 통해 사람들에게 나를 표현할 수 있다는 자신감을 얻어 지금은 보다 자신감 있는 태도로 밝고 솔직하게 의견을 전달하려고 노력하고 있습니다.</p>
                    </div>
                    <br />
                    <div>
                        <h2>[ 직무 능력 습득을 위해 받은 교육 ]</h2>
                        <br />
                        <p>지인들의 권유로 선택한 6개월 국비 지원 과정을 통해 프로그래머는 저의 목표가 되었습니다.</p>
                        <p>평소에 당연하게 사용하던 웹 사이트를 구현하는 JAVA 웹 개발 프로젝트를 접하며 부족함을 느끼고 필요한 지식이나 기술들을 알아 보았습니다. 교육원 까지의 거리가 먼 만큼 교육 시간 외 이동 시간 등 남는 시간을 최대한 알뜰하게 활용하여 JAVA 관련 기술 습득에 노력을 기울였습니다. 그 결과 JAVA, ORACLE, JSP, Javascript, Spring Framework 등 6개월 커리큘럼 전반적인 내용에 익숙해질 수 있었고 프로그래밍에 재미를 붙일 수 있게 되었습니다. 특히 JAVA 관련 기술에 대해서는 좋은 기반이 된다고 생각해 꾸준히 학습하고 있습니다.</p>
                        <br />
                        <p>또한 대세 트렌드에 뒤쳐지지 않아야 한다는 욕심이 있어 이미 사용중이던 기술이 아닌 nodeJs, reactJs등의 기술들을 독학으로 학습하였고 이를 기반으로 이직한 회사에서 성공적으로 프로젝트들을 완수하였습니다.</p>
                        <br />
                        <p>아직은 부족한 스킬이나 역량이 더 많지만 지금도 계속적으로 찾고, 배우며, 습득하는 것 처럼 앞으로도 이와 같이 제자리에 안주하지 않고 꾸준히 발전을 이어나가는 개발자가 되고 싶습니다.</p>
                    </div>
                    <br />
                    <div>
                        <h2>[ 꼼꼼함과 흡수력 ]</h2>
                        <br />
                        <p>저는 꼼꼼한 성격으로 생활 방식을 전반적으로 정리정돈 하는 것이 습관화되어 있습니다.</p>
                        <p>특히 무언가를 학습할 때에 있어서 필기 내용을 꼼꼼하게 적어둔 후 일목요연하게 정리하여 주변에서도 본인의 필기 보다는 저의 필기 노트를 가져가서 공부할 정도로 꼼꼼하다는 말을 많이 듣습니다.</p>
                        <br />
                        <p>이런 습관을 바탕으로 새로운 것을 학습하는 데에 있어 흡수력이 좋은 편이라고 생각합니다.</p>
                        <p>다른 사람들에 비해 이해가 빠른 편은 아니지만 정리해둔 내용을 바탕으로 여러 번 복습하며 흡수하고 교육원에서도 새로운 개념에 대해 교육생들이 먼저 저에게 먼저 의견을 구하곤 했습니다.</p>
                        <br />
                        <p>이러한 저의 꼼꼼함과 흡수력은 작은 오류나 결함도 놓치지 않고 회사와 클라이언트의 만족에 큰 도움을 줄 것입니다.</p>
                    </div>
                    <br />
                    <div>
                        <h2>[ 입사 후 목표 ]</h2>
                        <br />
                        <p>업계의 정보를 찾아보며 느낀 것은 프로그래밍 기술은 트렌드에 민감하다는 것이었습니다.</p>
                        <p>현재 트렌드에 가까운 기술에 관심을 가지고 배울 계획에 있으며 이 외에도 남는 개인 시간을 최대한 활용하여 새로운 기술들 위주의 학습을 꾸준히 이어가 트렌드의 선두가 되는 프로그래머가 되려 합니다. 또한 정보처리기사 등 관련 자격증을 취득하여 업무 관련 전문성을 키우고자 합니다. 그리고 다른 분야의 직장에서 쌓은 경험, 성실함 또한 반드시 도움이 될 거라 믿고 있으며 동료들에게 방해가 아닌, 역지사지로 그 누구보다 빠르게 일을 배워 동료들에게 힘이 될 수 있다고 자신 있게 말씀 드립니다.</p>
                        <br />
                        <p>조금씩 나아가게 되더라도 꾸준히 발전하는, 익숙함과 나태함을 구분하는 그런 팀원, 개발자가 되려 합니다.</p>
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

        h1{
            color: #4AAD8C;
        }

        .skills{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2vh;
            width: 100%;

            .skill{
                width: 100%;

                span{
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