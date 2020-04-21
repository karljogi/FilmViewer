using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;



namespace FilmViewer2.Models
{

    // MoviesList class, holds a collection of movies
    public class MoviesList : List<Movie>
    {
        public Movie movie { get; set; }


    }
}

