// Meteor package definition.
Package.describe({
  name: 'aramk:ionicons',
  version: '2.0.1',
  summary: 'The premium icon font for Ionic.'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles([
    'src/css/ionicons.css',
    'src/fonts/ionicons.eot',
    'src/fonts/ionicons.svg',
    'src/fonts/ionicons.ttf',
    'src/fonts/ionicons.woff'
  ], 'client');
});
