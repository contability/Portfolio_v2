import img_projects_1_1 from "../img/projects/image_projects_1_1.jpg";
import img_projects_1_2 from "../img/projects/image_projects_1_2.jpg";
import img_projects_1_3 from "../img/projects/image_projects_1_3.png";
import img_projects_1_4 from "../img/projects/image_projects_1_4.jpg";
import img_projects_1_5 from "../img/projects/image_projects_1_5.jpg";
import img_projects_2_1 from "../img/projects/image_projects_2_1.png";
import img_projects_2_2 from "../img/projects/image_projects_2_2.png";
import img_projects_2_3 from "../img/projects/image_projects_2_3.png";
import img_projects_3_1 from "../img/projects/image_projects_3_1.png";
import img_projects_3_2 from "../img/projects/image_projects_3_2.png";
import img_projects_3_3 from "../img/projects/image_projects_3_3.png";
import mov_projects_4 from "../assets/movie/mov_project_4.mp4";

export interface projectsType{
    name: string;
    start: string;
    end: string;
    summary: string;
    desc: Array<string>;
    usedSkills: Array<string>;
    img: any;
    mov: any;
}

const D_Projects: projectsType[] = [{
    name: "GIS 공간 정보 시스템",
    start: "2020-04",
    end: "2022-05",
    summary: "유의미한 공간 정보를 간단하고 효과적으로 활용하기 위한 시스템으로 비용 절감 및 업무 효율 향상을 목적으로 함",
    desc: [
        "spring framework MVC 패턴 SW 개발",
        "openLayers 라이브러리를 활용한 지도 시스템 개발",
        "SOAP, REST API 등을 활용한 외부 연계",
        "javascript 및 다양한 라이브러리를 사용하여 동적 컨텐츠 개발",
        "easyUI 라이브러리를 활용한 UI 구현",
        "리포팅 툴을 활용한 통계 리포트 출력",
        "해당 기술을 토대로 피자헛 상권 관리 시스템, 한국수력원자력, 강릉시 등 40여건의 SI/SM 프로젝트 수행"
    ],
    usedSkills : [
        "java",
        "javascript",
        "spring framework",
        "jQuery",
        "oracle",
        "msSQL",
        "postgreSQL",
        "mySQL"
    ],
    img:[
        img_projects_1_1,
        img_projects_1_2,
        img_projects_1_3,
        img_projects_1_4,
        img_projects_1_5
    ],mov: []
},{
    name: "COLLEXX",
    start: "2022-05",
    end: "2022-07",
    summary: "NFT Market 플랫폼",
    desc: [
        "Web Publishing",
        "AWS S3 data access",
        "React front 개발",
        "materialUI를 활용한 UI 구현"
    ],
    usedSkills: [
        "javascript",
        "react",
        "mySQL",
        "materialUI",
        "AWS"
    ],img:[
        img_projects_3_1,
        img_projects_3_2,
        img_projects_3_3,
    ],mov: []
},{
    name: "BICOSWAP",
    start: "2022-05",
    end: "2022-07",
    summary: "DeFi 플랫폼",
    desc: [
        "Web Publishing",
        "React front 개발",
        "materialUI를 활용한 UI 구현",
        "smart contract 배포 및 활용",
        "api 구현"
    ],
    usedSkills: [
        "javascript",
        "react",
        "nodeJs",
        "mySQL",
        "materialUI",
        "solidity",
    ],img:[
        img_projects_2_1,
        img_projects_2_2,
        img_projects_2_3
    ],
    mov: []
},{
    name: "margin",
    start: "2022-06",
    end: "2022-07",
    summary: "현물, 파생 상품과 소셜 암호화 트레이딩을 제안하는 암호화 거래 플랫폼",
    desc: [
        "Web Publishing",
        "React front 개발",
        "materialUI를 활용한 UI 구현",
        "Traiding View 거래 차트 동기화 및 데이터 활용"
    ],
    usedSkills: [
        "javascript",
        "react",
        "nodeJs",
        "mySQL",
    ],
    img: [
        
    ],
    mov: [
        mov_projects_4
    ]
}]; 

export { D_Projects };