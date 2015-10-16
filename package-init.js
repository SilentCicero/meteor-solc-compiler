// Node environment
if(typeof global !== 'undefined') {
    solc = (typeof global.solc !== 'undefined') ? global.solc : Npm.require('solc');
}
