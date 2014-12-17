Package.describe({
  git: 'https://github.com/raix/Meteor-formular.git',
  name: 'raix:formular',
  version: '0.0.1',
  summary: 'Adds Formular'
});

Package.onUse(function(api) {
  
  api.versionsFrom && api.versionsFrom('1.0');

  api.use(['jquery'], 'client');
  api.export('formular');

  api.addFiles([
    'formular.js'
  ], 'client');

});
