var countries = ["Venezuela", "Burundi", "Finland", "Laos"];

// function
// console.log(countries);

function renderButtons() {

    // Deleting the movies prior to adding new countries
    // $("#countryButtons").empty();

    // Looping through the array of countries
    for (var i = 0; i < countries.length; i++) {

      // Then dynamicaly generating buttons for each country in the array
      
      var a = $("<button>");
      // Adding a class of country-btn to our button
      a.addClass("country-btn");
      // Adding a data-attribute
      a.attr("data-name", countries[i]);
      // Providing the initial button text
      a.text(countries[i]);
      // Adding the button to the countryButtons div
      $("#countryButtons").append(a);
    }
  }


 // This function handles events where a country button is clicked
 $("#add-country").on("click", function() {
    event.preventDefault();
    // console.log(countries.length);
    var movie = $("#country-input").val();
    countries.push("country-input");
    // console.log(countries);


    // event.preventDefault();
    // // This line grabs the input from the textbox
    // var movie = $("#movie-input").val().trim();

    // // Adding movie from the textbox to our array
    // movies.push(movie);

    // // Calling renderButtons which handles the processing of our movie array
    // renderButtons();
  });