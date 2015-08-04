import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      sections: this.store.findAll('section'),
      currentId: this.paramsFor('section').id
    });
  },

  setupController: function (controller, model) {
    controller.set('attrs.sections', model.sections);
    controller.set('attrs.currentId', model.currentId);
  }
});
