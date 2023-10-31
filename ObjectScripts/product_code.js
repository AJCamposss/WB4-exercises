function parsePartCode (code) {
    const index = code.indexOf(":");
    return code.substring(0, index);

}
