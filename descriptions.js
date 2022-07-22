const DESCRIPTIONS = {
	"": main,
	"/": main,
	"/apply/": application,
	"/apply": application,
};
let COLORS = null;
/** @type {{name: string, description: string, forks: number, stars: number, language: ?string}[]} */
let REPOS = null;
loadRepos();
loadColors();

async function loadColors() {
	COLORS = await (
		await fetch(
			"https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
		)
	).json();
}

async function colorsLoaded() {
	return new Promise((resolve) => {
		setInterval(() => {
			if (COLORS !== null) resolve();
		}, 1);
	});
}

async function loadRepos() {
	REPOS = await (
		await fetch(
			"https://api.github.com/orgs/JSRoyals/repos?type=all&per_page=100&page=1"
		)
	).json();
	REPOS.forEach((repo, index) => {
		REPOS[index] = {
			name: repo.name,
			description: repo.description,
			forks: repo.forks_count,
			stars: repo.stargazers_count,
			language: repo.language,
		};
	});
	REPOS.sort((a, b) => b.forks + b.stars - (a.forks + a.stars));
}

async function reposLoaded() {
	return new Promise((resolve) => {
		setInterval(() => {
			if (REPOS !== null) resolve();
		}, 1);
	});
}

/**
 * @returns {Promise<Element[]>}
 */
async function main() {
	var repos1 = document.createElement("div"),
		repos2 = document.createElement("div");
	repos1.style.display = "flex";
	repos1.style.flexDirection = "row";
	repos1.style.marginTop = "45px";
	repos1.style.maxHeight = "fit-content";
	repos2.style.display = "flex";
	repos2.style.flexDirection = "row";
	repos2.style.marginTop = "10px";
	REPOS.forEach((repo, index) => {
		if (index + 1 > 4) return;
		var container = document.createElement("div");
		container.style.border = "1px solid #666";
		container.style.borderRadius = "6px";
		container.style.margin = "10px";
		container.style.padding = "20px 15px";
		container.style.minWidth = "calc(50vw - 80px)";
		container.style.fontSize = "14px";

		var title = document.createElement("a");
		title.href = "https://github.com/JSRoyals/" + repo.name;
		title.target = "_self";
		title.innerHTML = `<strong>${repo.name}</strong>`;

		var description = document.createElement("p");
		description.textContent = repo.description;
		description.style.color = "#aaa";
		description.style.position = "absolute";

		var language = document.createElement("p");
		language.style.position = "relative";
		language.style.top = "20px";
		language.style.color = "#8b949e";
		language.innerHTML =
			`<size style="font-size: 45px; color: ${
				COLORS[repo.language]?.color
			}; position:relative; top: 9px">•</size>` + repo.language;
		language.style.pointerEvents = "none";
		language.style.userSelect = "none";

		var stars = document.createElement("p");
		stars.style.position = "absolute";
		stars.style.marginLeft = `${0 + (repo.language !== null ? 100 : 0)}px`;
		stars.style.marginTop = "-20px";
		stars.style.color = "#aaa";
		stars.style.cursor = "pointer";

		var starsIcon = document.createElement("img");
		starsIcon.src = "github_star.png";
		starsIcon.height = 16;
		starsIcon.style.position = "relative";
		starsIcon.style.top = "2px";
		starsIcon.style.marginRight = "3px";

		stars.innerHTML = `<a class="no-alter" style="color: #aaa; text-decoration: none" target="_self" href="https://github.com/JSRoyals/${repo.name}/stargazers">${starsIcon.outerHTML}${repo.stars}</a>`;
		stars.onmouseover = () => {
			stars.querySelector("img").src = "github_star_hover.png";
			stars.querySelector("a").style.color = "#58a6ff";
		};
		stars.onmouseleave = () => {
			stars.querySelector("img").src = "github_star.png";
			stars.querySelector("a").style.color = "#aaa";
		};

		var forks = document.createElement("p");
		forks.style.position = "absolute";
		forks.style.marginLeft = `${
			0 + (repo.language !== null ? 100 : 0) + (repo.stars > 0 ? 40 : 0)
		}px`;
		forks.style.marginTop = "-20px";
		forks.style.color = "#aaa";
		forks.style.cursor = "pointer";

		var forksIcon = document.createElement("img");
		forksIcon.src = "github_fork.png";
		forksIcon.height = 14;
		forksIcon.style.position = "relative";
		forksIcon.style.top = "2px";
		forksIcon.style.marginRight = "3px";

		forks.innerHTML = `<a class="no-alter" style="color: #aaa; text-decoration: none" target="_self" href="https://github.com/${repo.name}/network/members">${forksIcon.outerHTML}${repo.forks}</a>`;
		forks.onmouseover = () => {
			forks.querySelector("img").src = "github_fork_hover.png";
			forks.querySelector("a").style.color = "#58a6ff";
		};
		forks.onmouseleave = () => {
			forks.querySelector("img").src = "github_fork.png";
			forks.querySelector("a").style.color = "#aaa";
		};

		var toAppend = [title];
		if (repo.description) toAppend.push(description);
		if (repo.language == null) {
			language.style.marginBottom = "40px";
			language.innerHTML = "&nbsp;";
		}
		toAppend.push(language);
		if (repo.stars > 0) toAppend.push(stars);
		if (repo.forks > 0) toAppend.push(forks);

		container.append(...toAppend);

		if (index + 1 < 3) repos1.append(container);
		else repos2.append(container);
	});
	var div = document.createElement("div");
	div.style.textAlign = "center";
	div.style.color = "#eee";
	div.innerHTML = `JSRoyals is an organization of JavaScript based developers. Here, many open-source JS projects will be shared. JSRoyals accepts skilled JavaScript developers that have ideas and/or projecs to share with the organization or with the community following. Should you wish to join the organization and gain access to the projects we harbor, read the steps on <a href="/apply">how to apply</a>.`;
	var h = document.createElement("h5");
	h.textContent = "Popular Repositories";
	h.style.color = "#ddd";
	h.style.padding = 0;
	h.style.margin = 0;
	h.style.position = "relative";
	h.style.top = "30px";
	h.style.left = "15px";
	return [div, h, repos1, repos2];
}

/**
 * @returns {Element[]}
 */
function application() {
	var desc = document.createElement("div");
	desc.style.textAlign = "center";
	desc.style.color = "#eee";
	desc.innerHTML = `So you think you have what it takes to join this amazing organization of JavaScript developers? Well then, gather your wits, projects, and skills, and follow this guide to becoming an official JSRoyals member!`;

	var requirementsTitle = document.createElement("h2");
	requirementsTitle.style.display = "flex";
	requirementsTitle.style.flexDirection = "row";
	requirementsTitle.style.justifyContent = "center";
	requirementsTitle.style.marginBottom = "20px";
	requirementsTitle.style.borderBottom = "1px solid #555";
	requirementsTitle.textContent = "Requirements";
	requirementsTitle.style.color = "#eee";
	requirementsTitle.style.padding = "0 0 5px 0";

	var requirementsText = document.createElement("div");
	requirementsText.style.textAlign = "center";
	requirementsText.style.color = "#eee";
	requirementsText.innerHTML = `First off, it is required that you meet these minimum criteria before your application will be considered:`;
	requirementsText.style.marginBottom = "5px";

	var requirementsList = document.createElement("ol");
	requirementsList.style.color = "#eee";
	requirementsList.innerHTML = `<strong>1.</strong>&nbsp;&nbsp;&nbsp; 2 or more repositories with release(s) and/or package(s)<br>
<strong>2.</strong>&nbsp;&nbsp;&nbsp; A knowledge of any JavaScript library & proof of knowledge (NodeJS, ReactJS, jQuery, etc.)<br>
<strong>3.</strong>&nbsp;&nbsp;&nbsp; Age 18+ (Must provide proof of age)`;

	var applicationTitle = document.createElement("h2");
	applicationTitle.style.display = "flex";
	applicationTitle.style.flexDirection = "row";
	applicationTitle.style.justifyContent = "center";
	applicationTitle.style.marginBottom = "20px";
	applicationTitle.style.borderBottom = "1px solid #555";
	applicationTitle.textContent = "Application";
	applicationTitle.style.color = "#eee";
	applicationTitle.style.padding = "0 0 5px 0";

	var applicationText = document.createElement("div");
	applicationText.style.textAlign = "center";
	applicationText.style.color = "#eee";
	applicationText.innerHTML = `Now that you've met the requirements, it's time to send in your application! You will be emailing the application to the <a href="https://github.com/xJustJqy">founder</a> of JSRoyals. Click <a href="mailto:jjmcginley04@gmail.com?subject=JSRoyals Application - USERNAME&body=Links to 2 JavaScript project repositories:%0D- %0D- %0D%0DWhat libraries do you know:%0D- %0D%0DAge, Name, and proof of identity: (This will NEVER be shared)%0D">here</a> to proceed`;

	return [
		desc,
		requirementsTitle,
		requirementsText,
		requirementsList,
		applicationTitle,
		applicationText,
	];
}
