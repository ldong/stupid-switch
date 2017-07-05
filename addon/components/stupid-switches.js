import Ember from 'ember';
import layout from '../templates/components/stupid-switches';

export default Ember.Component.extend({
  layout,

  isHover: false,

  handleToggleIsHover() {
    this.toggleProperty('isHover');
  },

  mouseEnter() {
    console.log('mouseEnter');
    Ember.run.throttle(this, 'handleToggleIsHover', 100);
  },

  mouseLeave() {
    console.log('mouseLeave');
    Ember.run.throttle(this, 'handleToggleIsHover', 100);
  },

  actions: {
    toggleExclude() {
      console.log('toggleExclude');
    },

    toggleDeselect() {
      console.log('toggleDeselect');
    },

    toggleInclude() {
      console.log('toggleInclude');
    }
  }
});
