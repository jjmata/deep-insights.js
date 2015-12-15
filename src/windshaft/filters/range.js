var _ = cdb._
var WindshaftFilterBase = require('./base')

module.exports = WindshaftFilterBase.extend({
  isEmpty: function () {
    return _.isUndefined(this.get('min')) && _.isUndefined(this.get('max'))
  },

  setRange: function (min, max) {
    this.set({
      min: min,
      max: max
    })
  },

  unsetRange: function () {
    this.setRange(undefined, undefined)
  },

  toJSON: function () {
    var json = {}
    json[this.get('widgetId')] = {
      min: this.get('min'),
      max: this.get('max'),
      column_type: this.get('columnType')
    }

    return json
  }
})