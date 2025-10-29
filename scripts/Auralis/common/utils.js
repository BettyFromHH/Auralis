export function getScreenWidth() {
    return window.innerWidth;
}

export function checkURL(url, file, name) {
    if (!url || !file || !name) return false;

    const idx = url.toLowerCase().indexOf(file);
    if (idx === -1) return false;

    const after = url.substring(idx + file.length);
    return after.toLowerCase().includes(name.toLowerCase());
}



