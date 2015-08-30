var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Mongoose models used by Plott.
 *
 * Models:
 *
 *    - 'FingerPrints' Model that collects wifi fingerprint data.
 *
 * @module plott/mongoModels
 * @category mongodb
 * @return {Object} model
 * @example
 * var FingerPrints = plott.mongoModels.FingerPrints;
 *
 * //=FingerPrints model
 */

var FingerPrints = new Schema({
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
    FingerPrints: mongoose.model('FingerPrints', FingerPrints)
};
