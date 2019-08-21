workflow "Test Building" {
  resolves = ["NPM build"]
  on = "pull_request"
}

action "NPM Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm i"
}

action "NPM build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run build"
  needs = ["NPM Install"]
}

workflow "New workflow" {
  on = "push"
}
