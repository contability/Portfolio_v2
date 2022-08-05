export const onClickCopy = (copyText : string) => {
    if(copyText === "+82 10-9992-9822") copyText = "01099929822";
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = copyText;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
};