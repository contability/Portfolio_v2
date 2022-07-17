export interface LeftNavList{
    id: string;
    eventType: string;
    url?: string;
};

export const list: LeftNavList[] = [{
    id: "Introduce",
    eventType: "routing",
    url: "/introduce"
},{
    id: "Skills",
    eventType: "routing",
    url: "/skills"
},{
    id: "Projects",
    eventType: "routing",
    url: "/projects"
},{
    id: "E-Mail",
    eventType: "popup"
},{
    id: "Phone",
    eventType: "popup"
},{
    id: "Github",
    eventType: "link",
    url: "https://github.com/contability"
}];