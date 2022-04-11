# Build local copy
```
git submodule update --init --recursive
yarn
yarn build:win
```
Then check `dist` folder

# Deployment
Run `yarn deploy:prod`

# Windows Appx Specific Tips
- Install unsigned copy

# Local testing tips
## Windows
Uncomment special `identityName` and `publisher` fields in `build/config.js`
Run `add-appxpackage -path appx.appx -AllowUnsigned`

## Linux
Run `sudo snap install --dangerous dist/Raindrop-amd64.snap`