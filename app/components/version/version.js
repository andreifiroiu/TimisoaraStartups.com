'use strict';

angular.module('timisoaraStartupsApp.version', [
  'timisoaraStartupsApp.version.interpolate-filter',
  'timisoaraStartupsApp.version.version-directive'
])

.value('version', '0.9.2');
