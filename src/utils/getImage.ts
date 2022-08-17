const getSkillImg: Function = (skill : string) => {
    // saram in cdn
    let url = "";
    
    switch(skill){
        case "javascript":
            url = "https://cdn.jumpit.co.kr/images/stacks/javascript.png";
            break;
        case "jQuery":
            url = "https://cdn.jumpit.co.kr/images/stacks/jquery.png";
            break;
        case "jQuery UI":
            url = "https://cdn.jumpit.co.kr/images/stacks/jqueryui.png";
            break;
        case "java":
            url = "https://cdn.jumpit.co.kr/images/stacks/java.png";
            break;
        case "postgresql":
            url = "https://cdn.jumpit.co.kr/images/stacks/postgresql.png";
            break;
        case "mssql":
            url = "https://cdn.jumpit.co.kr/images/stacks/mssql.png";
            break;
        case "oracle":
            url = "https://cdn.jumpit.co.kr/images/stacks/oracle.png";
            break;
        case "spring framework":
            url = "https://cdn.jumpit.co.kr/images/stacks/springframework.png";
            break;
        case "react":
            url = "https://cdn.jumpit.co.kr/images/stacks/react.png";
            break;
        case "nodeJs":
            url = "https://cdn.jumpit.co.kr/images/stacks/node.js.png";
            break;
        case "amazon EC2":
            url = "https://cdn.jumpit.co.kr/images/stacks/amazonec2.png";
            break;
        case "amazon S3":
            url = "https://cdn.jumpit.co.kr/images/stacks/amazons3.png";
            break;
        case "tomcat":
            url = "https://cdn.jumpit.co.kr/images/stacks/apachetomcat.png";
            break;
        default:
            url = "https://cdn.jumpit.co.kr/images/stacks/noStack.png";
    }

    return url;
};

export { getSkillImg };