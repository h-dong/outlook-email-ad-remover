workflow "Test Build" {
  on = "push"
  resolves = ["Run build"]
}

action "NPM install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm i"
}

action "Install dependencies" {
  uses = "actions/setup-node@3d792c1dbd495fc03ea5f33f13f53cf2f774d317"
  runs = "npm i"
}

action "Run build" {
  uses = "actions/setup-node@3d792c1dbd495fc03ea5f33f13f53cf2f774d317"
  needs = ["Install dependencies"]
  runs = "npm run build"
}
