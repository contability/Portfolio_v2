import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";
import image_react from "../img/image_react.jpg";


const Main = () => {
    const navigate = useNavigate();

    return(
        <MainBox>
            <section className="rightSection">
                <div className="wrapped">
                    <header>
                        <div onClick={()=>navigate("/")}>PORTFOLIO</div>
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
                color: #ffffff;
                text-align: center;
                font-family: Arial,Helvetica,sans-serif;
                
                & > div{
                    letter-spacing: 2.2rem;
                    padding-left: 10px;
                }

                & > div:first-child{
                    padding-top: 2%;
                    font-size: 4rem;
                    letter-spacing: 1rem;
                    font-weight: 900;
                    padding-left: 0px;
                    cursor: pointer;
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