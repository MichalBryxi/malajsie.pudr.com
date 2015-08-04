import Ember from 'ember';

export default Ember.Controller.extend({
  heap: {
    title: "New section",
    body: "Blah blah"
  },
  
  markers: [
      {title: "Home", lat: 14.766127, lng: 102.810987, body: "Here is B&H's home"},
      {title: "Shop", lat: 14.762963, lng: 102.812285, body: "Here is B&H's shop", isInfoWindowVisible: true},
      {title: "Hay's", lat: 14.762900, lng: 102.812018, body: "Here is Hay's shop"}
    ],

  actions: {
    createSection: function () {
      var newSection = this.store.createRecord('section', this.get('heap'));
      newSection.save();
    }
  }
});
