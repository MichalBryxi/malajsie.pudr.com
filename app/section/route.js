import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('section', params.id);
  },

  setupController: function (controller, model) {
    controller.set('attrs.section', model);
  }
});
