# Build local copy
```
git submodule update --init --recursive
git submodule update --remote --merge
npm i
npm run build:win
```
Then check `dist` folder

# Deployment
Run `npm run deploy:prod`

# Local testing tips
## Windows
Uncomment special `identityName` and `publisher` fields in `build/config.js`
Run `add-appxpackage -path appx.appx -AllowUnsigned`