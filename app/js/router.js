/**
 * Router is necessary for 'routing' - url <-> application state.
 *
 * Ember relies heavily on router (though it can be removed completely).
 *
 * Top level route (TasksRoute) is the main one. Other routes are just for url managing, but their main purpose is to alter
 * model of main route.
 * */
App.Router.map(function() {
    this.resource('tasks', { path: '/' }, function() {
        this.route('active');
        this.route('completed');
    });
});

// main route if you enter index.html (www.domain.com)
TasksRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('todo');
    }
});

// index route (if you don't enter subroute) (www.domain.com)
TasksIndexRoute = Ember.Route.extend({
    setupController: function() {
        this.controllerFor('todos').set('filteredTodos', this.modelFor('todos'));
    }
});

// route for active todos (www.domain.com/active)
TasksActiveRoute = Ember.Route.extend({
    setupController: function() {
        var activeTodos = this.modelFor('todos').filter(function(todo) {
            return !todo.get('isCompleted');
        })

        this.controllerFor('todos').set('filteredTodos', activeTodos);
    }
});

// route for completed todos (www.domain.com/completed)
TasksCompletedRoute = Ember.Route.extend({
    setupController: function() {
        var activeTodos = this.modelFor('todos').filter(function(todo) {
            return !todo.get('isCompleted');
        })

        this.controllerFor('todos').set('filteredTodos', activeTodos);
    }
});