using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FilmViewer2.Models;


// Provides an API to getting MovieList or Movie.
// In order to retrieve a full movie list a http request should be made: https://localhost:44384/Movie/GetMovieData
// In order to retrieve a list of movies based on category, a http request @ : https://localhost:44384/Movie/GetMoviesByID?categoryId={categoryID}
// In order to retrieve a Movie object by id a http request @ : https://localhost:44384/Movie/GetMovieById?movieId={movieId}

namespace FilmViewer2.Controllers
{
    public class MovieController : Controller
    {

    MovieService service = new MovieService();
    public JsonResult GetMovieData()
        {
            var movies = service.getMoviesList();
            return Json(movies, JsonRequestBehavior.AllowGet);
        }

    public JsonResult GetMoviesByCategoryId(int categoryId)
    {
        var movies = service.getMoviesListByCategoryId(categoryId);
        return Json(movies, JsonRequestBehavior.AllowGet);
    }

    public JsonResult GetMovieById(int movieId)
    {
        var movie = service.getMovieDetails(movieId);
        return Json(movie, JsonRequestBehavior.AllowGet);
    }

    }
}