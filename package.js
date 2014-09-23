Package.describe({
  name: 'raix:formular',
  version: '0.0.0',
  summary: 'Adds Formular'
});

Package.on_use(function(api) {
  
  api.versionsFrom && api.versionsFrom('METEOR@0.9.1');

  api.use(['jquery'], 'client');
  api.export('formular');

  api.add_files([
    'formular.js'
  ], 'client');

});
