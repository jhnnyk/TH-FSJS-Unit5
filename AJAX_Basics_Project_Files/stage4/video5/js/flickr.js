$(document).ready(function () {
  $('button').click(function () {
    $(this).addClass("selected");
    $("button").removeClass("selected");

    const flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let animal = $(this).text();
    let flickrOptions = {
      tags: animal,
      format: "json"
    };

    const displayPhotos = (data) => {
      
    };

    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });
}); // end ready
