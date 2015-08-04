import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},

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

  markers: function () {
    var currentId = this.get('attrs.currentId');

    return this.get('attrs.sections').map(function (item) {
      var icon = null;
      if (item.get('id') === currentId) {
        icon = '//maps.google.com/mapfiles/ms/icons/blue-dot.png';
      } else {
        icon = '//maps.google.com/mapfiles/ms/icons/red-dot.png';
      }
      return {title: item.get('title'), lat: item.get('lat'), lng: item.get('long'), icon: icon};
    });
  }.property('attrs.sections.[]'),

  sectionsSorted: function () {
    return this.get('attrs.sections').sortBy('order');
  }.property('attrs.sections.@each'),

  heap: {
    title: "New section",
    body: "Blah blah"
  },

  actions: {
    createSection: function () {
      var newSection = this.store.createRecord('section', this.get('heap'));
      newSection.save();
    }
  }
});
