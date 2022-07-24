import img_projects_2_1 from "../img/projects/image_projects_2_1.png";
import img_projects_2_2 from "../img/projects/image_projects_2_2.png";
import img_projects_2_3 from "../img/projects/image_projects_2_3.png";
import img_projects_3_1 from "../img/projects/image_projects_3_1.png";
import img_projects_3_2 from "../img/projects/image_projects_3_2.png";
import img_projects_3_3 from "../img/projects/image_projects_3_3.png";

export interface projectsType{
    name: string;
    start: string;
    end: string;
    summary: string;
    desc: Array<string>;
    usedSkills: Array<string>;
    img: any;
}

const D_Projects: projectsType[] = [{
    name: "GIS 공간 정보 시스템",
    start: "2020-04",
    end: "2022-05",
    summary: "공간정보를 효과적으로 활용하기 위한 시스템. 유의미한 데이터를 간단하게 조회할 수 있게 하여 비용 절감 및 업무 효율 향상",
    desc: [
        "spring framework MVC 패턴 SW 개발",
        "openLayers 라이브러리를 활용한 지도 시스템 개발",
        "SOAP, REST API 등을 활용한 외부 연계",
        "javascript 및 다양한 라이브러리를 사용하여 동적 컨텐츠 개발",
        "easyUI 라이브러리를 활용한 UI 구현",
        "리포팅 툴을 활용한 리포트 출력",
        "해당 기술을 토대로 피자헛 상권 관리 시스템, 한국수력원자력, 강릉시 등 40여건의 SI/SM 프로젝트 수행"
    ],
    usedSkills : [
        "java",
        "javascript",
        "jQuery",
        "oracle",
        "msSQL",
        "postgreSQL",
        "msSQL"
    ],
    img:[
    ]
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
        "AWS"
    ],img:[
        img_projects_3_1,
        img_projects_3_2,
        img_projects_3_3,
    ]
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
    ],
    usedSkills: [
        "javascript",
        "react",
        "nodeJs",
        "mySQL",
        "solidity",
    ],img:[
        img_projects_2_1,
        img_projects_2_2,
        img_projects_2_3
    ]
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
    img: []
}]; 

export { D_Projects };