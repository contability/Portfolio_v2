import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";
import { D_skills } from "../data/D_Skills";
import img_profile from "../img/image_profile.jpg";

const Introduce = () => {
    return(
        <IntroduceBox>
            <aside className="left">
                <h1>Skills</h1>
                <div className="skills">
                    {D_skills.map((v: any, i) => (
                        <p key={i} className="skill">
                            <p>{v.id}</p>
                            <p>
                                <progress value={v.amount} max="100"/>
                            </p>
                        </p>
                    ))}
                </div>
            </aside>
            <aside className="right">
                <article className="profile_img">
                        <img src={img_profile} alt="" />
                </article>
                <article className="blahblah">
                    2년차 개발자로 GIS 프로젝트 SI/SM 업무를 수행 해왔고
                    요구사항 기술부터 설계, 구현, 테스트, 배포, 유지보수까지 전반적인 개발 업무를 진행 하였습니다.
                    <br /><br />
                    저의 가장 큰 무기라고 생각하는 것은 꾸준함입니다.
                    <br /><br />
                    끊임 없이 변화하는 개발 직군에서 가장 필요한 것 또한 꾸준함이라고 생각하며
                    지금 당장은 모자랄 수 있겠지만 지금도, 앞으로도 저의 무기로
                    누구보다 빠르게 적응하여 주위에 도움이 되는 동료가, 그리고 제자리에 멈춰있지 않는 개발자가 되고자 합니다.
                </article>
            </aside>
        </IntroduceBox>
    );
};

const IntroduceBox = styledComponents.main`
    width: 100%;
    height: 100vh;
    z-index: 0;
    background: #FFFAAE;
    display: flex;

    .left{
        width: 20.971386vw;
        padding: 3%;
        height: 100%;
        z-index: 1;
        background: black;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5vh;

        .skills{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2vh;

            .skill{
                width: 100%;
            }
        }
    }

    .right{
        flex: 1;
        height: 100%;
        padding: 2.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20vh;

        .profile_img{
            height: 40vh;
            img{
                height: 100%;
            }
        }

        .blahblah{
            word-break: break-word;
        }
    }
`;

export default Introduce;