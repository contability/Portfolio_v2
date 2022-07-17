import styledComponents from "styled-components";
import image_leftBg from "../../img/image_leftBg.png";
import { list } from "../../data/D_LeftNavList";
import { useEffect } from "react";

const LeftNavBar = () => {
    return (
        <LeftNavBarBox>
            <picture>
                <img src={image_leftBg} alt="" />
            </picture>
            <nav>
                <ul>
                    {list.map((v: any, i : number) => (
                        <li key={i}>
                            <button>{v.id}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </LeftNavBarBox>
    );
};

const LeftNavBarBox = styledComponents.section`
    width: 10%;
    height: 100%;
    display: inline-block;

    & > picture{
        width: 100%;
        height: 100%;
        & > img{
            height: 100%;
            width: 100%;
        }
    }
`;

export default LeftNavBar;