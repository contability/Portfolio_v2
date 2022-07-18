export const onClickCopy = (copyText : string) => {
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = copyText;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
};