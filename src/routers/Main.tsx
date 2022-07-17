import { useEffect } from "react";
import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";
import image_react from "../img/image_react.jpg";


const Main = () => {
    
    return(
        <MainBox>
            {/* <LeftNavBar/> */}
            <section className="rightSection">
                <div className="wrapped">
                    <header>
                        <div>PORTFOLIO</div>
                        <div>SINHYUNGJUNG</div>
                    </header>
                    <article className={""}>
                        <img src={image_react} alt="" />    
                    </article>
                </div>
            </section>

        </MainBox>
    );
};

const MainBox = styledComponents.main`
    width: 100%;
    height: 100vh;
    z-index: 0;
    
    .rightSection{
        left: 110px;
        width: 90%;
        height: 100%;
        display: inline-block;
        position: absolute;

        .wrapped{
            width:100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;

            header{
                height: 30%;
                background: #181818;
                color: white;
                text-align: center;

                & > div:first-child{
                    padding-top: 7%;
                }
            }
            
            article{
                height: 50%;

                img{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: 0;
                }
            }
        }
    }
`;

export default Main;