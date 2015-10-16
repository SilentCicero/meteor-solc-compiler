// Browser environment
if(typeof window !== 'undefined') {
    solc = (typeof window.solc !== 'undefined') ? window.solc : require('solc');
}

// Node environment
if(typeof global !== 'undefined') {
    solc = (typeof global.solc !== 'undefined') ? global.solc : require('solc');
}
