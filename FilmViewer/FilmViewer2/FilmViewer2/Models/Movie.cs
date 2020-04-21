using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;

namespace FilmViewer2.Models
{
    //Movie object class. 
    public class Movie
    {
        public int id { get; set; }
        public string title { get; set; }
        public int year { get; set; }
        public string description { get; set; }
        public double rating { get; set; }
        public byte categoryId { get; set; }
    }
    
}