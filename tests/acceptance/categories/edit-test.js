import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'booker/tests/helpers/start-app';

module('Acceptance | categories/edit', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /categories/edit/id', function(assert) {
  visit('/categories/edit/:id');
  andThen(function() {
    assert.equal(currentURL(), '/categories/edit/:id');
  });
});


test('Editing current category', function(assert) {
  visit('/categories');
  click('.primary');
  andThen(function() {
    assert.equal(currentPath(), 'categories.edit');
  });
  fillIn('.categoryName', 'Main');
  fillIn('.icon', '3');
  click('.save');
  andThen(function() {
    assert.equal(currentRouteName(), 'categories.index');
  });
});
