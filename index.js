var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Mongoose models used by Plott.
 *
 * @module plott/mongoModels
 * @category mongodb
 * @return {Object} model
 * @example
 * var Position = plott.mongoModels.Position;
 *
 * //=position model
 */

var Position = new Schema({
  type: {type: String, default: "Feature"},
  properties: {
    address: {type: String, required: true},
    floor: {type: Number, required: true},
    room: {type: String},
    wifi: [
      {
        ssid: {type: String, required: true},
        mac: {type: String, required: true},
        signal_level: {type: Number, required: true},
        channel: {type: Number, required: true},
      }
    ]
  },
  geometry: {
       type     : { type: String, default: "Point" },
       coordinates: { type: [Number], index: '2dsphere'}
  }
});

module.exports = {
    Postion: mongoose.model('Position', Position)
};
