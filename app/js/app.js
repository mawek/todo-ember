/**
 * Create application itself and assign it to global variable 'App'.
 *
 * This global variable will be used for storing all ember/application objects (controllers, views,...)
 * */
window.App = Ember.Application.create();

/**
 * Create local storage adapter that will be used by ember-data for storing/fetching data from local storage.
 * */
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos'
});
