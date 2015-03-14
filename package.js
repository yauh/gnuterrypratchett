Package.describe(
{
  name: 'yauh:gnuterrypratchett',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds the X-Clacks-Overhead header with the message "GNU Terry Pratchett"',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/yauh/gnuterrypratchett',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api)
{
  api.versionsFrom('1.0.3.2');
  api.addFiles('gnuterrypratchett.js');
});

Package.onTest(function(api)
{
  api.use('tinytest');
  api.use('gnuterrypratchett');
  api.addFiles('gnuterrypratchett-tests.js');
});