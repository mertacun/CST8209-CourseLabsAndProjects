function setTitle(newTitle) {
    document.getElementById("theTitle").textContent = newTitle;
    return "Title has been updated!";
}

function increaseFontSize() {
    let titleElement = document.getElementById("theTitle");
    titleElement.style.fontSize = (parseInt(titleElement.style.fontSize) || 40) + 5 + "px";
    return "Font size increased to: " + titleElement.style.fontSize;
}

function decreaseFontSize() {
    let titleElement = document.getElementById("theTitle");
    titleElement.style.fontSize = (parseInt(titleElement.style.fontSize) || 40) - 5 + "px";
    return "Font size decreased to: " + titleElement.style.fontSize;
}

function setBackgroundColor(newColor) {
    let titleElement = document.getElementById("theTitle");
    titleElement.style.backgroundColor = newColor;
    return "Background color has been updated!";
}

function setFontColor(newColor) {
    let titleElement = document.getElementById("theTitle");
    titleElement.style.color = newColor;
    return "Font color has been updated!";
}

// The instruction says "page theme". I hope I did the right thing.
function setTheme(themeChoice) {
    let validThemes = ["theme1", "theme2", "theme3"];
    let body = document.body;

    if (validThemes.includes(themeChoice)) {
        body.className = themeChoice;
        body.style.backgroundColor = "";
        body.style.color = "";
        return "Theme set to: " + themeChoice;
    }

    return "The provided theme is not valid!";
}
