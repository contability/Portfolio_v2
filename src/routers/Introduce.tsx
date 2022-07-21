import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";

const Introduce = () => {
    return(
        <IntroduceBox>
            <aside className="left">

            </aside>
            <aside className="right">

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
        height: 100%;
        z-index: 1;
        background: black;
    }

    .right{
        flex: 1;
        height: 100%;
    }
`;

export default Introduce;