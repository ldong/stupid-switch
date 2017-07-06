import Ember from 'ember';
import layout from '../templates/components/stupid-switch';

export default Ember.Component.extend({
  layout,

  tagName: '',

  /**
   * Component name, optional
   * @type {String}
   */
  name: '',

  /**
   * Component tooltip title, optional
   * @type {String}
   */
  title: '',

  /**
   * @type {Boolean}
   */
  isChecked: true,

  /**
   * @type {Boolean}
   */
  isDisabled: false,

  /**
   * Component Hook, override required
   * Invoke if is a function and action is not disabled
   * @type {Function}
   */
  onClick: null,

  actions: {
    toggleClick() {
      Ember.Logger.log('toggleClick');
      if(!this.isDestroyed && !this.get('isDisabled')) {
        this.toggleProperty('isChecked');
        if (typeof this.onClick === 'function') {
          this.onClick(arguments);
        } else {
          Ember.Logger.error('onClick must be a function');
        }
      }
    }
  }
});
