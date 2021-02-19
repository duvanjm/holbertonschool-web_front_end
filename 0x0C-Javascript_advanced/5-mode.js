function changeMode(size, weight, transform, background, color) {
    document.documentElement.style["font-size"] = size;
    document.documentElement.style["font-weight"] = weight;
    document.documentElement.style["text-transform"] = transform;
    document.documentElement.style["background-color"] = background;
    document.documentElement.style["color"] = color;
}

let spooky = function() { changeMode(9, "bold", "uppercase", "pink", "green")};
let darkMode = function() { changeMode(12, "bold", "capitalize", "black", "white")};
let screamMode = function() { changeMode(12, "normal", "lowercase", "white", "black")};

function main() {
    let body = document.body;
    let par = document.createElement("p");
    let text = document.createTextNode("Welcome Holberton!");
    par.appendChild(text);

    let spooky_ = document.createElement("button");
    let spooky_text = document.createTextNode("Spooky");
    spooky_.setAttribute("onClick", "spooky()");

    let dark = document.createElement("button");
    let dark_text = document.createTextNode("Dark mode");
    dark.setAttribute("onClick", "darkMode()");

    let scream = document.createElement("button");
    let scream_text = document.createTextNode("Scream mode");
    scream.setAttribute("onClick", "screamMode()");

    par.appendChild(text);
    spooky_.appendChild(spooky_text);
    dark.appendChild(dark_text);
    scream.appendChild(scream_text);

    body.appendChild(par);
    body.appendChild(spooky_);
    body.appendChild(dark);
    body.appendChild(scream);
}

window.onload = main();
