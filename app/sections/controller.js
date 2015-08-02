import Ember from 'ember';

export default Ember.Controller.extend({
  heap: {},

  actions: {
    createSection: function() {
      var newSection = this.store.createRecord('section', this.get('heap'));
      newSection.save();
    }
  }
});
