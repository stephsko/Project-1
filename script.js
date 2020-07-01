var recipeBtn = $("#button-addon1");
var restaurantBtn = $("#button-addon2");

var ingredient = "cheese";
var spoonApiKey = "73753e2422a4438c8dcb28a382d66b82";
var spoonQueryURL = "https://api.spoonacular.com/recipes/search?apiKey=" + spoonApiKey + "&query=" + ingredient + "&number=5";

var yelpApiKey = "gHLb0y1DUUd4SfZtMn8zxnMMFKbzRHu76kPiYmq6YRxho6kU4EY-5c_9OF9k-2jUnl8MbrJk-9V-jijay4pKZQRyaFnxcfB8ufplveLn5pYWthT-WAtN_9bkUGf7XnYx";
var yelpSearch = "cheese";
var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?term=" + yelpSearch + "&limit=5&location=Austin,TX";

recipeBtn.on("click", function () {
    $("#searchResults").attr("style", "display: visible;");
    $.ajax({
        url: spoonQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 1; i <= response.results.length; i++) {
            var recipeImage = $("<img src='' alt='' id='recipeImage" + i + "' style='border-radius: 50%; margin: 5px;'>");
            var fileExtension = response.results[i - 1].image.split(".").pop();

            recipeImage.attr("src", "https://spoonacular.com/recipeImages/" + response.results[i - 1].id + "-90x90." + fileExtension);


            $("#Result" + i).text(" " + response.results[i - 1].title);
            $("#Result" + i).prepend($(recipeImage));
        }

    })
})

restaurantBtn.on("click", function () {
    $("#searchResults").attr("style", "display: visible;");
    $.ajax({
        url: "https://cors-ut-bootcamp.herokuapp.com/" + yelpQueryURL,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + yelpApiKey
        }
    }).then(function (response) {
        console.log(response);

        for (var i = 1; i <= response.businesses.length; i++) {
            var restaurantImage = $("<img src='' alt='' id='restaurantImage" + i + "' style= 'max-height: 90px; max-width: 90px; height: auto; width: auto; border-radius: 50%; margin: 5px;'>");


            restaurantImage.attr("src", response.businesses[i - 1].image_url);


            $("#Result" + i).text(response.businesses[i - 1].name);
            $("#Result" + i).prepend($(restaurantImage));
        }

    })
})
