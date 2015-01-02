app.controller('MoviesController', ['MoviesService',
    function(MoviesService) {
        var movieSer = this;
        this.getMovies = function() {
            MoviesService.getMovies(function(movieData) {
              movieSer.movies = movieData;
            });
        };
        this.getMovieDetails = function() {
            return MoviesService.getMovieDetails();
        };
    }
]);
