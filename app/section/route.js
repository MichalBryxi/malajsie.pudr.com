import Ember from 'ember';

export default Ember.Route.extend({
  scrolled: function () {
    console.log('foo');
  },

  bindScrolling: function () {
    Ember.$(document).bind('touchmove', this.scrolled);
    Ember.$(window).bind('scroll', this.scrolled);
  }.on('init'),
  unbindScrolling: function () {
    Ember.$(window).unbind('scroll', this.scrolled);
    Ember.$(document).unbind('touchmove', this.scrolled);
  }
});
