const utils = {
    copyToClipboard: (textToCopy) => {
        const tempInput = document.createElement("input");
        document.body.append(tempInput);
        tempInput.setAttribute("type", "text");
        tempInput.setAttribute("value", textToCopy);
        tempInput.select();
        document.execCommand("copy");
        tempInput.remove();
    }
};

export default utils;
