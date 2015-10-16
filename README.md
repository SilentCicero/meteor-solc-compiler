## meteor-package-solc
The Ethereum solidity compiler wrapped for MeteorJS.

## Install

### Meteor

    $ meteor add silentcicero:solc
    
### NPM

    npm install solc

## Usage

Note, `solc` becomes the a global variable.

```javascript
var input = "contract x { function g() {} }";
var output = solc.compile(input, 1); // 1 activates the optimiser
for (var contractName in output.contracts)
    console.log(contractName + ': ' + output.contracts[contractName].bytecode);
```
