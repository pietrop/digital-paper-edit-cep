
#  Digital Paper Edit - Adobe CEP Panel 
 Adobe CEP (Common Extensibility Platform) Panel - Premiere Plugin

---> _Work in progress_ <--

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

 
[See here for overall project architecture info](https://github.com/bbc/digital-paper-edit-client#project-architecture)

_Adobe CEP panel info coming soon_

For official [docs on Adobe CEP extensions from Adobe see here](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_9.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md)

For [unofficial doc notes from autoEdit Adobe CEP Panel's R&D implementation see here](https://autoedit.gitbook.io/documentation/adobe-panel/autoedit-adobe-cep-panel-dev-setup)

## Setup
<!-- _stack - optional_
_How to build and run the code/app_ -->

_TBC_

```env
ZXPSignCmd_PATH="./ccextensionsmac/ZXPSignCmd"
COUNTRY_CODE=""
STATE_OR_PROVINCE=""
ORGANIZATION="NA"
COMMON_NAME="NA"
CERTIFICATE_PASSWORD=""
CERTIFICATE_OUTPUT_PATH="./ccextensionsmac/certificate.p12"
INPUT_DIRECTORY="./adobe-panel-build"
OUTPUT_ZXP="./dist/com.dpe.it.zxp"
TIMESTAMPS_URL="http://timestamp.digicert.com/"
GITHUB_TOKEN=""
TRAVIS_REPO_SLUG=""
```


Since Premiere only accepts signed extension, you should [tell it to accept unsigned extensions](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_9.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions) for development purpuses, by 
copy pasting the following in terminal

```bash
defaults write com.adobe.CSXS.8 PlayerDebugMode 1
```


## Usage - development

```
npm run adobe-panel-dev
```
Copies the necessary folders into the system folder for premiere `~/Library/Application\ Support/Adobe/CEP/extensions/dpe-panel/`

Once you open adobe premiere `window` --> `extensions` --> `dpe`

You can then open the local server for the adobe panel which is at http://localhost:8099, there you can see the dev tools inspector and console.

## Usage - production

_TBC_

<!-- To install the packaged extension in Adobe Premiere, [see user manual instructions](https://autoedit.gitbook.io/digital-paper-edit-user-manual/digital-paper-edit-adobe-panel/install) -->


 

## System Architecture
<!-- _High level overview of system architecture_ -->

Adobe CEP paenl 

 _TBC_

## Development env
 <!-- _How to run the development environment_

_Coding style convention ref optional, eg which linter to use_

_Linting, github pre-push hook - optional_ -->
 
- node `v11.15.0`
- npm `6.7.0`

if you are using nvm as your package manager you can just run 

```
nvm use
```
To set to the node version `v11.15.0`

## Build
<!-- _How to run build_ -->

_TBC_

<!-- ```
npm run adobe-panel-build
``` -->

<!-- ```
npm run adobe-panel-package-sign-build
``` -->

 -->

## Tests
<!-- _How to carry out tests_ -->

 _TBC_

## Deployment
<!-- _How to deploy the code/app into test/staging/production_ -->

_TBC_

<!-- Travis or  
 ```
npm run adobe-panel-package-sign-build
``` -->

<!-- Travis into releases + manual adobe exchange? - optional -->


## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) guidelines.

## Licence
<!-- mention MIT Licence -->
See [LICENCE](./LICENCE.md)

## Legal Disclaimer

_Despite using React and DraftJs, this repo is not promoting any Facebook products or other commercial interest._