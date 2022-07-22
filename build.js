document.body.style.padding = 0;
document.body.style.margin = 0;
document.body.style.background = "#2a2a2a";
document.documentElement.style.fontFamily = `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`;

const ELEMENTS = {};

// #region HEADER
let Header = (ELEMENTS["header"] = document.createElement("div"));
Header.style.display = "flex";
Header.style.flexDirection = "row";
Header.style.alignItems = "center";
Header.style.justifyContent = "center";
Header.style.background = "#333";
Header.style.boxShadow = "0 0 7px black";
Header.style.font = "inherit";

//#region TITLE
var title1 = document.createElement("h1");
var img = document.createElement("img");
var title2 = document.createElement("h1");
title1.textContent = "JS";
title1.style.color = "#eee";
img.src = "https://avatars.githubusercontent.com/u/109771956?s=200&v=4";
img.height = 50;
img.style.position = "relative";
img.style.top = "-6px";
title2.textContent = "Royals";
title2.style.color = "#eee";
Header.append(title1, img, title2);
//#endregion

//#region BUTTONS
let Apply = (ELEMENTS["applybutton"] = document.createElement("button"));
Apply.textContent = "Apply";
Apply.style.border = "1px solid #1a1a1a";
Apply.style.background = "#00000022";
Apply.style.borderRadius = "20px";
Apply.style.padding = "10px 20px";
Apply.style.fontSize = "17px";
Apply.style.color = "#eee";
Apply.style.position = "absolute";
Apply.style.right = "70px";
Apply.style.cursor = "pointer";
Apply.style.transition = "0.25s ease all";

Apply.onmouseover = () => {
	Apply.style.background = "#66666622";
	Apply.style.fontSize = "18px";
};
Apply.onmouseleave = () => {
	Apply.style.background = "#00000022";
	Apply.style.fontSize = "17px";
};
Apply.onclick = () => {
	window.open("/apply", "_self");
};

let Home = (ELEMENTS["applybutton"] = document.createElement("button"));
Home.textContent = "Home";
Home.style.border = "1px solid #1a1a1a";
Home.style.background = "#00000022";
Home.style.borderRadius = "20px";
Home.style.padding = "10px 20px";
Home.style.fontSize = "17px";
Home.style.color = "#eee";
Home.style.position = "absolute";
Home.style.left = "70px";
Home.style.cursor = "pointer";
Home.style.transition = "0.25s ease all";

Home.onmouseover = () => {
	Home.style.background = "#66666622";
	Home.style.fontSize = "18px";
};
Home.onmouseleave = () => {
	Home.style.background = "#00000022";
	Home.style.fontSize = "17px";
};
Home.onclick = () => {
	window.open("/", "_self");
};

Header.append(Apply, Home);
//#endregion

document.body.append(Header);
// #endregion

//#region ABOUT
let README = (ELEMENTS["readme"] = document.createElement("div"));
README.style.margin = "10px";
README.style.padding = "25px 15px 22px 15px";

//#region DESCRIPTION
var elms = DESCRIPTIONS[location.pathname];
README.append(...elms);
//#endregion
document.body.append(README);
//#endregion

document.querySelectorAll("a").forEach((a) => {
	a.style.color = "#58a6ff";
	a.style.textDecoration = "none";
});
