import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";

const Introduce = () => {
    return(
        <IntroduceBox>
            <LeftNavBar/>
        </IntroduceBox>
    );
};

const IntroduceBox = styledComponents.main`
    width: 100%;
    height: 100vh;
`;

export default Introduce;