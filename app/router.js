import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sections');
  this.route('section', {path: '/section/:id'});
});

export default Router;
