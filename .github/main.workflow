workflow "Test Build" {
  on = "pull_request"
  resolves = ["NPM build"]
}

action "NPM install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm i"
}

action "NPM build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["NPM install"]
  runs = "npm run build"
}
