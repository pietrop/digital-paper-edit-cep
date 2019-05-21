
#  Digital Paper Edit - Adobe CEP Panel 
 Adobe CEP (Common Extensibility Platform) Panel - Premiere Plugin

---> _Work in progress_ <--

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

 
[See here for overall project architecture info](https://github.com/bbc/digital-paper-edit-client#project-architecture)

_Adobe CEP panel info coming soon_

## Setup
<!-- _stack - optional_
_How to build and run the code/app_ -->

_TBC_

<!-- # Adobe CEP Panel 
from make file 

setup-cep-panel:
	@echo "Setting Premiere debug mode to accept unsigned extensions"
	defaults write com.adobe.CSXS.5 PlayerDebugMode 1
	defaults write com.adobe.CSXS.6 PlayerDebugMode 1
	defaults write com.adobe.CSXS.7 PlayerDebugMode 1
	defaults write com.adobe.CSXS.8 PlayerDebugMode 1
	@echo "Done, please restart your computer" 
    
assemble-cep-panel:
	@echo "Adobe CEP Panel - Assemble relevant files"
	# TODO: clear directory  ./packages/cep/build and recreate 
	rm -rf ./packages/cep/build
	# TODO: move relevant files from react and electron backend into ./packages/cep/build
	mkdir -p ./packages/cep/build
	# eg 
	# sync-files adobe-panel-src adobe-panel-build 
	# && sync-files electron adobe-panel-build/electron 
	# && sync-files lib adobe-panel-build/lib 
	# &&  sync-files ./package.json adobe-panel-build/package.json 
	# && sync-files node_modules  adobe-panel-build/node_modules
    
    -->
 

## Usage

_TBC_

<!-- 

start-cep-panel: cep-panel-assemble
	@echo "Adobe CEP Panel start"
	@echo "make directory for Adobe CEP extensions if not present"
	mkdir -p ~/Library/Application\ Support/Adobe/CEP/extensions/
	# TODO: need to decide what to move into Adobe CEP extension folder, ideally jsut content of ./packages/cep/build
	cd ./packages/cep/build && cp -R $PWD ~/Library/Application\ Support/Adobe/CEP/extensions/autoedit2-panel
	# sync-files adobe-panel-src ~/Library/Application\\ Support/Adobe/CEP/extensions/autoedit2-panel
	
    
     -->
 

## System Architecture
<!-- _High level overview of system architecture_ -->

Adobe CEP paenl 

 _TBC_

## Development env
 <!-- _How to run the development environment_

_Coding style convention ref optional, eg which linter to use_

_Linting, github pre-push hook - optional_ -->

_TBC_
 

## Build
<!-- _How to run build_ -->

_TBC_

 <!-- 
 	
build-cep-panel: build-react assemble-cep-panel
	@echo "Adobe CEP Panel build"
	@echo "Adobe CEP Panel - packaging and code signing for distribution"
	# node ./package/cep/scripts/sign-and-package-adobe-panel.js

 -->

## Tests
<!-- _How to carry out tests_ -->

 _TBC_

## Deployment
<!-- _How to deploy the code/app into test/staging/production_ -->

_TBC_

<!-- Travis into releases + manual adobe exchange? - optional -->


## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) guidelines.

## Licence
<!-- mention MIT Licence -->
See [LICENCE](./LICENCE.md)

## Legal Disclaimer

_Despite using React and DraftJs, the BBC is not promoting any Facebook products or other commercial interest._