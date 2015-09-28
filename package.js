// Meteor package definition.
Package.describe({
  name: 'aramk:ionicons',
  version: '2.0.1_1',
  summary: 'The premium icon font for Ionic.'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.addFiles([
    'src/css/ionicons.css'
  ], 'client');
  api.addAssets([
    'src/fonts/ionicons.eot',
    'src/fonts/ionicons.svg',
    'src/fonts/ionicons.ttf',
    'src/fonts/ionicons.woff'
  ], 'client');
});
