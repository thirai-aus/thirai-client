app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/movie-list.html'
    })
    .when('/movies', {
      templateUrl: 'views/movie-list.html'
    })
});

