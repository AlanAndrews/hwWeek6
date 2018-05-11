var countries = ["Venezuela", "Burundi", "Finland", "Laos"];

// function
// console.log(countries);

function renderButtons() {

    // Deleting the countries prior to adding new countries
    $("#countryButtons").empty();

    // Looping through the array of countries
    for (var i = 0; i < countries.length; i++) {

      // Then dynamicaly generating buttons for each country in the array
      
      var a = $("<button>");
      // Adding a class of country-btn to our button
      a.addClass("country-btn");
      // Adding a data-attributes
      a.attr("data-name", countries[i]);
      a.attr("data-state", "still");
      a.attr("data-animate");
      a.attr("data-still");

      // Providing the initial button text
      a.text(countries[i]);
      // Adding the button to the countryButtons div
      $("#countryButtons").append(a);
      
    }
  }


 // This function handles events where a country button is clicked
 $("#add-country").on("click", function(event) {
    event.preventDefault();
    // console.log(countries.length);
    var country = $("#country-input").val().trim();
    countries.push(country);
    renderButtons();
    
    // console.log(countries);


    // event.preventDefault();
    // // This line grabs the input from the textbox
    // var movie = $("#movie-input").val().trim();

    // // Adding movie from the textbox to our array
    // movies.push(movie);

    // // Calling renderButtons which handles the processing of our movie array
    // renderButtons();
  
});

    // Adding click event listen listener to all buttons
    // $("#countryButtons").on("click", function() {
        $(document).on("click", ".country-btn", displayGifs);
    function displayGifs() {

        
        event.preventDefault();

        // console.log(this);
        


        // Grabbing and storing the data-animal property value from the button
        var countryName = $(this).attr("data-name");

        $("#countries").empty();
        
        console.log(countryName);
  
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          countryName + "&api_key=dc6zaTOxFJmzC&limit=10";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            console.log(queryURL);
  
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
  
              // Creating and storing a div tag
              var countryDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var countryImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              countryImage.attr("src", results[i].images.fixed_height_still.url);
              countryImage.attr("data-still", results[i].images.fixed_height_still.url);
              countryImage.attr("data-animate", results[i].images.fixed_height.url);
              countryImage.attr("data-state", "still");
              countryImage.addClass("countryImage");
              // Appending the paragraph and image tag to the countryDiv
              countryDiv.append(p);
              countryDiv.append(countryImage);
  
              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $("#countries").prepend(countryDiv);
            }
            
          });

          $(document).on("click",".countryImage", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            // var state = $(countryImage).attr("data-state");
      
            console.log($(this).attr("data-state"));
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if ($(this).attr("data-state") === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });

      };

renderButtons()