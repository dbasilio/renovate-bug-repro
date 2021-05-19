## How to Use This Repo

This repo is a minimal repro for this issue https://github.com/renovatebot/renovate/issues/9985

## Setup

Note: You will need a private registry in order to test this out. Our specific use cases uses jfrog. You must use username/password credentials to log in, as the access tokens generated by jfrog are too long for rsa encryption on https://app.renovatebot.com/encrypt

1. Replace all references to `https://myprivateregistry.jfrog.io/npm-prod/` in [yarnrc.yml](./yarnrc.yml) with your npm registry url
2. Replace all references to `https://myprivateregistry.jfrog.io/npm-prod/` in [renovate.json](./renovate.json) with your npm registry url
3. Replace the username in [renovate.json](./renovate.json) with the npm username from your private registry
4. Replace the encrypted password in [renovate.json](./renovate.json) with your encrypted password
    - If you are using jfrog, you must use the encrypted password field from your profile. Using your plaintext password will not work.
    - Make sure to take your encrypted password and submit it to https://app.renovatebot.com/encrypt
5. Enter your user's `username:password` into the [yarnrc.yml](./yarnrc.yml) in `npmAuthIdent`. Base64 encode the whole string.
6. Replace the package reference in src/index.js with any function from your private repository
7. Run `yarn test` and if the import works successfully, you should see a console log. If it fails to import it will throw an error
