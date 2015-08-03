import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  order: DS.attr('number'),
  lat: DS.attr('string'),
  long: DS.attr('string'),
  zoom: DS.attr('number')
});
