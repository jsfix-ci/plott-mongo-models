var mongoModels = require('../'),
    test = require('tape');

    test('Position', function (t){
      var Position = mongoModels.Position;
      t.ok(typeof Position, 'Position Model');
      t.end();
    });
