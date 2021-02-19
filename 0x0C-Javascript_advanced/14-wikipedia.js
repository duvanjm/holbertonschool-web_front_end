function createElement(data) {
    let body = document.body;
    let par = document.createElement("p");
    let text = document.createTextNode(data);
    par.appendChild(text);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    req.onload = callback;
    req.send();
}

queryWikipedia(createElement);
