using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FilmViewer2.Models;
using Microsoft.Ajax.Utilities;

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