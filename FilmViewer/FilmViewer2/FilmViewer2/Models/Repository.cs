using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FilmViewer2.Models
{

    //Repository class which holds the hardcoded list of movies and provides three methods for returning the full MoviesList object,
    // a single Movie object by Id and movies by category. 
    // The list of movies is the top 15 retrieved from https://www.imdb.com/list/ls000060680/

    public class Repository
    {

        private MoviesList FullMovieList = new MoviesList()
        {

            new Movie
            {
                id = 1,
                title = "The Godfather",
                year = 1972,
                description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                rating = 9.2,
                categoryId = 1,
            },

            new Movie
            {
                id = 2,
                title = "The Lord of the Rings: The Return of the King",
                year = 2003,
                description = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                rating = 8.9,
                categoryId = 2,
            },

            new Movie
            {
                id = 3,
                title = "Inception",
                year = 2010,
                description = "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                rating = 8.8,
                categoryId = 3,
            },

            new Movie
            {
                id = 4,
                title = "The Lord of the Rings: The Fellowship of the Ring",
                year = 2001,
                description = "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
                rating = 8.8,
                categoryId = 2,
            },

            new Movie
            {
                id = 5,
                title = "The Matrix",
                year = 1999,
                description = "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                rating = 8.7,
                categoryId = 4,
            },

            new Movie
            {
                id = 6,
                title = "The Lord of the Rings: The Two Towers",
                year = 2002,
                description = "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
                rating = 8.7,
                categoryId = 2,
            },

            new Movie
            {
                id = 7,
                title = "Star Wars: Episode V - The Empire Strikes Back",
                year = 1980,
                description = "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
                rating = 8.7,
                categoryId = 2,
            },

            new Movie
            {
                id = 8,
                title = "Léon: The Professional ",
                year = 1994,
                description = "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
                rating = 8.5,
                categoryId = 3,
            },

            new Movie
            {
                id = 9,
                title = "Gladiator",
                year = 2000,
                description = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                rating = 8.5,
                categoryId = 2,
            },

            new Movie
            {
                id = 10,
                title = "Terminator 2: Judgment Day",
                year = 1991,
                description = "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
                rating = 8.5,
                categoryId = 4,
            },

            new Movie
            {
                id = 11,
                title = "Avengers: Endgame ",
                year = 2019,
                description = "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
                rating = 8.4,
                categoryId = 3,
            },

            new Movie
            {
                id = 12,
                title = "Braveheart",
                year = 1995,
                description = "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
                rating = 8.3,
                categoryId = 5,
            },

            new Movie
            {
                id = 13,
                title = "Toy Story",
                year = 1995,
                description = "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
                rating = 8.3,
                categoryId = 6,
            },

            new Movie
            {
                id = 14,
                title = "Aliens",
                year = 1986,
                description = "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost. This time, colonial marines have impressive firepower, but will that be enough?",
                rating = 8.3,
                categoryId = 3,
            },

            new Movie
            {
                id = 15,
                title = "Batman Begins",
                year = 2005,
                description = "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
                rating = 8.2,
                categoryId = 3,
            },

        };

         public MoviesList getFullMoviesList()
         {
             return FullMovieList;
         }

        public Movie getMovieByID(int id)
        {

            foreach (Movie item in FullMovieList)
            {
                if (id == item.id)
                    return item;
            }

            return null;
        }

    }
}