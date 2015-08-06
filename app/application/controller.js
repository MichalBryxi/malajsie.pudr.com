import Ember from 'ember';
// import makeActive from 'app/utils/make-active';

export default Ember.Controller.extend({
  needs: ['section'],

  attrs: {},
  lastMarker: null,

  markers: function () {
    var currentId = this.get('controllers.section.attrs.section.id');
    var self = this;

    return this.get('attrs.sections').map(function (item) {
      item.set('lng', item.get('long'));

      self.makeInactive(item);

      return item;
    });
  }.property('attrs.sections.[]'),

  changeActiveMarker: function () {
    var currentId = this.get('controllers.section.attrs.section.id'),
        lastMarker = this.get('lastMarker'),
        currentMarker = this.get('markers').findBy('id', currentId);

    if ( lastMarker ) {
      this.makeInactive(lastMarker);
    }

    this.set('lastMarker', currentMarker);
    this.makeActive(currentMarker);
  }.observes('markers.[]', 'controllers.section.attrs.section.id'),

  makeInactive: function (marker) {
    marker.setProperties({
      icon: '//maps.google.com/mapfiles/ms/icons/red-dot.png',
      opacity: 0.3,
      zIndex: 10,
      isInfoWindowVisible: false
    });
  },

  makeActive: function (marker) {
    marker.setProperties({
      icon: '//maps.google.com/mapfiles/ms/icons/blue-dot.png',
      opacity: 1,
      zIndex: 11,
      isInfoWindowVisible: true
    });
  },

  sectionsSorted: function () {
    return this.get('attrs.sections').sortBy('order');
  }.property('attrs.sections.[]'),

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
