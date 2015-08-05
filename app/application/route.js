import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('section');
  },

  setupController: function (controller, model) {
    controller.set('attrs.sections', model);
  }
});
