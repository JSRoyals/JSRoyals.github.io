const DESCRIPTIONS = {
	"": main(),
	"/": main(),
	"/apply/": application(),
	"/apply": application(),
};

/**
 * @returns {Element[]}
 */
function main() {
	var div = document.createElement("div");
	div.style.textAlign = "center";
	div.style.color = "#eee";
	div.innerHTML = `JSRoyals is an organization of JavaScript based developers. Here, many open-source JS projects will be shared. JSRoyals accepts skilled JavaScript developers that have ideas and/or projecs to share with the organization or with the community following. Should you wish to join the organization and gain access to the projects we harbor, read the steps on <a href="/apply">how to apply</a>.`;
	return [div];
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
