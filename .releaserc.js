const branch = require('git-branch');

var currentBranch = branch.sync();

const plugins = [];

plugins.push("@semantic-release/commit-analyzer");
plugins.push("@semantic-release/release-notes-generator");

if (currentBranch === "main") {
  plugins.push("@semantic-release/changelog");
  plugins.push("@semantic-release/github");
  plugins.push("@semantic-release/npm");
} else {
  plugins.push("@semantic-release/github");
}

plugins.push("@semantic-release/git");

module.exports = {
  baseBranch: "main",
  tagFormat: "${version}",
  branches: [
    "main",
    { name: "develop", prerelease: true }
  ],
  plugins,
}