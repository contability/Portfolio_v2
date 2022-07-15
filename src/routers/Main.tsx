import styledComponents from "styled-components";

const Main = () => {

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