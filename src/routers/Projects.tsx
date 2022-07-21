import styledComponents from "styled-components";
import LeftNavBar from "../components/left/LeftNavBar";

const Projects = () => {
    return(
        <ProjectsBox>
        </ProjectsBox>
    );
};

const ProjectsBox = styledComponents.main`
    width: 100%;
    height: 100vh;
    z-index: 0;
    background: #FFFAAE;
`;

export default Projects;