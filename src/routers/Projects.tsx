import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styledComponents from "styled-components";
import PopupBg from "../components/common/PopupBg";
import LeftNavBar from "../components/left/LeftNavBar";
import { D_Projects, projectsType } from "../data/D_Projects";
import { setIsSpinner } from "../reducers/common";

interface typeLocation{
    id: number;
}

const Projects = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isSpinner = useSelector((state: any) => state.common.isSpinner);

    // 굳이 써볼랬는데 아쉽..
    // const [gisRef, gisInView, gisEntry ] : any = useInView();
    // const [nftMarketRef, nftMarketInView, nftMarketEntry ] : any = useInView();
    // const [defiRef, defiInView, defiEntry ] : any = useInView();
    // const [exchangeRef, exchangeInView, exchangeEntry ] : any = useInView();

    const gisRef = useRef<null | any>();
    const nftMarketRef = useRef<null | any>();
    const defiRef = useRef<null | any>();
    const exchangeRef = useRef<null | any>();

    const init = () => {
        if(isSpinner < 1){
            setTimeout( () => {
                dispatch(setIsSpinner(isSpinner + 1));
                scrollTo();
            }, 2000);
        }else{
            scrollTo();
        }
    };

    const scrollTo : Function = () => {
            const state = location.state as typeLocation; 
            const id = state?.id;
            
            switch (id) {
                case 1:
                    gisRef?.current?.scrollIntoView({behavior: "smooth"});
                    break;
                case 2:
                    defiRef?.current?.scrollIntoView({behavior: "smooth"});
                    break;
                case 3:
                    nftMarketRef?.current?.scrollIntoView({behavior: "smooth"});
                    break;
                case 4:
                    exchangeRef?.current?.scrollIntoView({behavior: "smooth"});
                    break;
                default:
                    break;
            }
    };

    useEffect(() => {
        init();
    }, []);

    return(
        <ProjectsBox>
            {D_Projects.map((prj: projectsType, i) => (
                <article key={i} ref={
                    (prj.id === 1 && gisRef)
                    || (prj.id === 2 && defiRef)
                    || (prj.id === 3 && nftMarketRef)
                    || (prj.id === 4 && exchangeRef)
                    || ""
                    }>
                    <div className="prjHeader">
                        <h1>{prj.name}</h1>
                        <span>{prj.start}</span>
                        <span>&nbsp;~&nbsp;</span>
                        <span>{prj.end}</span>
                    </div>
                    <div className="prjSummary">{prj.summary}</div>
                    <div className="imageArea">
                        {prj.img.map((v: any, i: number) => (
                            <p key={i}>
                                <img src={v} alt="" onClick={() => window.open(v)}/>
                            </p>
                        ))}
                    </div>
                    <div className="videoArea">
                        {prj.mov.map((v: any, i: number) => (
                            <p key={i}>
                                <video autoPlay={true} loop={true}>
                                    <source src={v} type="video/mp4"/>
                                </video>
                            </p>
                        ))}
                    </div>
                    <div className="desc">
                        <ul>
                            {prj.desc.map((v, i) => (
                                <li key={i}>- {v}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </ProjectsBox>
    );
};

const ProjectsBox = styledComponents.main`
    width: 100%;
    z-index: 0;
    padding: 5% 10%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    background: #FFF2BB;
    overflow-y: auto;
    height: inherit;

    article{
        padding: 5vh 2vw;
        background: #F7CB57;
        border-radius: 8px;

        .prjHeader{
            h1{
                font-size: 30px;
                font-weight: 900;
            }
            span{
                font-size: 0.8rem;
            }
            
        }
        
        .prjSummary{
            padding: 6vh 0;
        }

        .desc{
            ul{
                padding-bottom: 2vh;
                li{
                    padding: 5px 0;
                }
            }
            padding-top: 2%;
        }

        .imageArea{
            display: flex;
            gap: 15px;
            flex-direction: row;
            flex-wrap: wrap;

            img{
                width: 100%;
                border-radius: 8px;
                cursor: pointer;
                box-shadow: 9px 13px 6px #00000029;
            }
        }

        .videoArea{
            display: flex;
            gap: 15px;
            flex-direction: row;
            flex-wrap: wrap;

            video{
                width: 100%;
                border-radius: 8px;
                box-shadow: 9px 13px 6px #00000029;
            }
        }
    }
`;

export default Projects;