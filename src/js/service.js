app.service('MoviesService', ['$resource',
    function($resource) {
        this.getMovies = function(success) {
            var eqsResource = $resource("http://localhost:8000/movies");
            eqsResource.get().$promise.then(function(movies) {
                console.log("Serving data from service..");
                success(movies.movies);
            }, function(errResponse) {
                console.error("Error occurred while retrieving earthquake data.");
            });
        };
        this.getMovieDetails = function() {
            return "XYZ";
        };
    }
]);
