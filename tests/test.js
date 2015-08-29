var mongoModels = require('../'),
    test = require('tape');

    test('Position', function (t){
      var FingerPrints = mongoModels.FingerPrints;
      t.ok(typeof FingerPrints, 'FingerPrints Model');
      t.end();
    });
