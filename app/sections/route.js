import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('section');
  },

  scrolled: function () {
    var sections = document.getElementsByTagName('section'),
        lastSection = 0;
    // var narrativeHeight = narrative.offsetHeight;
    // var newId = currentId;
    // Find the section that's currently scrolled-to.
    // We iterate backwards here so that we find the topmost one.
    for (var i = sections.length - 1; i >= 0; i--) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top >= 0) {
            lastSection = sections[i];
        }
    };
    lastSection.click();
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
