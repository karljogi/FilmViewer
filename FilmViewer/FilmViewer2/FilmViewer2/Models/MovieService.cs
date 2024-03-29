﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Web;

namespace FilmViewer2.Models
{
    //MovieService class provides 3 methods for retrieving movies: full list, by movie ID and by CategoryID.
    public class MovieService
    {
        Repository repo = new Repository();


        public MoviesList getMoviesList()
        {
            return this.repo.getFullMoviesList();
        }

        public Movie getMovieDetails(int id)
        {
            MoviesList filmsList = repo.getFullMoviesList();

            foreach (var Movie in filmsList)
            {
                if (id == Movie.id)
                {
                    return Movie;
                }
            }

            return null;
        }

        public MoviesList getMoviesListByCategoryId(int categoryId)
        {
            MoviesList movieList = new MoviesList();
            foreach (var Movie in this.repo.getFullMoviesList())
            {
                if (categoryId == Movie.categoryId)
                {
                    movieList.Add(Movie);
                }
            }

            return movieList;
        }



    }
}
