import Ember from 'ember';

export default Ember.Component.extend({
  // classNameBindings: ['isCurrent:well'],
  tagName: 'section',

  isCurrent: function () {
    return (this.get('section.id') == this.get('currentSection.id'));
  }.property('currentSection'),

  click: function () {
    this.toggleProperty('isExpanded');
    this.sendAction('action', this.get('section'));
  }
});
