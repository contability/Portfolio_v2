interface skillsType{
    id: string;
    amount: number;
}

const D_skills: skillsType[] = [{
    id:"javascript",
    amount: 60
},{
    id:"react",
    amount: 50
},{
    id:"nodeJs",
    amount: 25
},{
    id:"java",
    amount: 60
},{
    id:"jQuery",
    amount: 60
},{
    id:"postgreSQL",
    amount: 50
},{
    id:"oracle",
    amount: 40
},{
    id:"mySQL",
    amount: 40
},{
    id:"msSQL",
    amount: 20
},{
    id:"AWS",
    amount: 25
}, {
    id: "solidity",
    amount: 10
}];

export interface usedSkills{
    id: number;
    usedSkills: Array<string>;
}

const D_usedProjectSkills : usedSkills[] = [{
    id: 1,
    usedSkills : [
        "java",
        "javascript",
        "spring framework",
        "jQuery",
        "oracle",
        "msSQL",
        "postgreSQL",
        "mySQL",
        "openLayers",
        "svn"
    ],
},{
    id: 2,
    usedSkills: [
        "javascript",
        "react",
        "redux",
        "nodeJs",
        "mySQL",
        "materialUI",
        "styled-components",
        "solidity",
        "web3",
        "AWS",
        "git"
    ],
},{
    id: 3,
    usedSkills: [
        "javascript",
        "react",
        "redux",
        "mySQL",
        "materialUI",
        "styled-components",
        "AWS",
        "web3",
        "git"
    ],
},{
    id: 4,
    usedSkills: [
        "javascript",
        "react",
        "redux",
        "styled-components",
        "nodeJs",
        "mySQL",
        "web3",
        "AWS",
        "git"
    ],
}];

export { D_skills, D_usedProjectSkills };