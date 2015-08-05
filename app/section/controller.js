import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},
  
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
