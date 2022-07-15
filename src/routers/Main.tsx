import { useEffect } from "react";
import styledComponents from "styled-components";

const Main = () => {
    useEffect(() => {
        alert("메인이요");
    }, []);

    return(
        <MainBox>
        </MainBox>
    );
};

const MainBox = styledComponents.main`
    width: 100%;
    height: 1000px;
    background: black;
`;

export default Main;