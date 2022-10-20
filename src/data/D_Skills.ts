interface skillsType {
  id: string;
  amount: number;
}

const D_skills: skillsType[] = [
  {
    id: "typeScript",
    amount: 60,
  },
  {
    id: "react",
    amount: 60,
  },
  {
    id: "nextJs",
    amount: 40,
  },
  {
    id: "nodeJs",
    amount: 25,
  },
  {
    id: "java",
    amount: 60,
  },
  {
    id: "jQuery",
    amount: 60,
  },
  {
    id: "postgreSQL",
    amount: 50,
  },
  {
    id: "oracle",
    amount: 40,
  },
  {
    id: "mySQL",
    amount: 40,
  },
  {
    id: "msSQL",
    amount: 20,
  },
  {
    id: "AWS",
    amount: 25,
  },
  {
    id: "solidity",
    amount: 10,
  },
];

export interface usedSkills {
  id: number;
  usedSkills: Array<string>;
}

const D_usedProjectSkills: usedSkills[] = [
  {
    id: 1,
    usedSkills: [
      "java",
      "javascript",
      "spring framework",
      "jQuery",
      "oracle",
      "msSQL",
      "postgreSQL",
      "mySQL",
      "easy UI",
      "openLayers",
      "tomcat",
      "SVN",
    ],
  },
  {
    id: 2,
    usedSkills: [
      "javascript",
      "react",
      "redux",
      "nodeJs",
      "mySQL",
      "material UI",
      "styled-components",
      "solidity",
      "web3",
      "amazon EC2",
      "git",
    ],
  },
  {
    id: 3,
    usedSkills: [
      "javascript",
      "react",
      "redux",
      "mySQL",
      "material UI",
      "styled-components",
      "amazon EC2",
      "amazon S3",
      "web3",
      "git",
    ],
  },
  {
    id: 4,
    usedSkills: [
      "javascript",
      "react",
      "redux",
      "styled-components",
      "nodeJs",
      "mySQL",
      "web3",
      "amazon EC2",
      "git",
    ],
  },
  {
    id: 5,
    usedSkills: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "React Query",
      "SCSS",
      "React Hook Form",
      "Git Flow",
      "Jira",
      "Figma",
      "Husky",
    ],
  },
];

export { D_skills, D_usedProjectSkills };
