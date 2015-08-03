'use strict';

describe('timisoaraStartupsApp.version module', function() {
  beforeEach(module('timisoaraStartupsApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.9.2');
    }));
  });
});
