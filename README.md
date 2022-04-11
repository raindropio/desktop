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
https://stackoverflow.com/questions/23812471/installing-appx-without-trusted-certificate