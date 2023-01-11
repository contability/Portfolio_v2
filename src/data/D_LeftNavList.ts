export interface LeftNavList {
  id: string;
  eventType: string;
  url?: string;
}

export const list: LeftNavList[] = [
  {
    id: "about me",
    eventType: "routing",
    url: "/introduce",
  },
  {
    id: "projects",
    eventType: "routing",
    url: "/projects",
  },
  {
    id: "contact",
    eventType: "popup",
  },
  {
    id: "github",
    eventType: "link",
    url: "https://github.com/contability",
  },
  {
    id: "kakao",
    eventType: "link",
    url: "https://open.kakao.com/o/sqHCJgYe",
  },
];
