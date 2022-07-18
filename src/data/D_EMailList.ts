import I_gmail from "../icon/Icon_gmail.png";
import I_naver from "../icon/Icon_naver.png";

export interface EMailList{
    id: string;
    address: string;
}

const eMailList = [{
    id : "GOOGLE",
    address : "shouldBnewB@gmail.com",
},{
    id : "NAVER",
    address : "s_by_d@naver.com",
}];

export {eMailList};