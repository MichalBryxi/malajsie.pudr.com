import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isCurrent:current-section'],
  tagName: 'section',
  isEditting: false,

  isCurrent: function () {
    return (this.get('section.id') == this.get('currentSection.id'));
  }.property('currentSection'),

  click: function () {
    this.sendAction('action', this.get('section'));
  },

  actions: {
    edit: function () {
      if(this.get('isEditting')) {
        this.get('section').save();
      }
      this.toggleProperty('isEditting');
    }
  }
});
