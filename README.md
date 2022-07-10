# Build local copy
```
git submodule update --init --recursive
git submodule update --remote --merge
yarn
yarn build:win
```
Then check `dist` folder

# Deployment
Run `yarn deploy:prod`

# Local testing tips
## Windows
Uncomment special `identityName` and `publisher` fields in `build/config.js`
Run `add-appxpackage -path appx.appx -AllowUnsigned`