import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stupid-switches', 'Integration | Component | stupid switches', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stupid-switches}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stupid-switches}}
      template block text
    {{/stupid-switches}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
