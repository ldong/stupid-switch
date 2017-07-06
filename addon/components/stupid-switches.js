import Ember from 'ember';
import layout from '../templates/components/stupid-switches';

export default Ember.Component.extend({
  layout,

  isHover: false,

  handleToggleIsHover() {
    this.toggleProperty('isHover');
  },

  mouseEnter() {
    Ember.Logger.log('mouseEnter');
    Ember.run.throttle(this, 'handleToggleIsHover', 100);
  },

  mouseLeave() {
    Ember.Logger.log('mouseLeave');
    Ember.run.throttle(this, 'handleToggleIsHover', 100);
  },

  actions: {
    toggleExclude() {
      Ember.Logger.log('toggleExclude');
    },

    toggleDeselect() {
      Ember.Logger.loglog('toggleDeselect');
    },

    toggleInclude() {
      Ember.Logger.log('toggleInclude');
    }
  }
});
