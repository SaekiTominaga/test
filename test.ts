console.info("test");

const githubActions = process.env["GITHUB_ACTIONS"];
if (githubActions === "true") {
	console.info("string: true");
}
if (githubActions === true) {
	console.info("boolean: true");
}
