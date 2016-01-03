/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:solc-compiler',
  version: '0.2.1',
  summary: 'The Ethereum solidity compiler wrapped for MeteorJS.',
  git: 'https://github.com/SilentCicero/meteor-package-solc',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  Npm.depends({
    'solc': '0.2.0-1',
  });

  api.export(['solc'], ['server']);
  api.addFiles('soljson.js', 'client');
  api.addFiles('package-init.js', 'server');
});
