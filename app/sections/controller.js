import Ember from 'ember';

export default Ember.Controller.extend({
  currentSection: {lat: 49, long: 13, zoom: 5},
  styles:  [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
],

  heap: {
    title: "New section",
    body: "Blah blah"
  },

  actions: {
    createSection: function () {
      var newSection = this.store.createRecord('section', this.get('heap'));
      newSection.save();
    },

    moveMap: function (section) {
      this.set('currentSection', section);
    }
  }
});
