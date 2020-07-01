var recipeBtn = $("#button-addon1");
var restaurantBtn = $("#button-addon2");

var ingredient = "cheese";

var spoonApiKey = "73753e2422a4438c8dcb28a382d66b82";
var spoonQueryURL = "https://api.spoonacular.com/recipes/search?apiKey=" + spoonApiKey + "&query=" + ingredient + "&number=5";

var yelpApiKey = "gHLb0y1DUUd4SfZtMn8zxnMMFKbzRHu76kPiYmq6YRxho6kU4EY-5c_9OF9k-2jUnl8MbrJk-9V-jijay4pKZQRyaFnxcfB8ufplveLn5pYWthT-WAtN_9bkUGf7XnYx";
var yelpSearch = "cheese";
var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?term=" + yelpSearch + "&limit=5&location=Austin,TX";

recipeBtn.on("click", function(){
    $.ajax({
        url: spoonQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        for (var i = 1; i <= response.results.length; i++) {
            $("#Result" + i).text(response.results[i-1].title);
        }

    })
})

restaurantBtn.on("click", function(){
    $.ajax({
        url: "https://cors-ut-bootcamp.herokuapp.com/" + yelpQueryURL,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + yelpApiKey
        }
    }).then(function(response){
        console.log(response);
        console.log(response.businesses[0].name);

        // $("#Result1").text(response.businesses[0].name);
        // $("#Result2").text(response.businesses[1].name);
        // $("#Result3").text(response.businesses[2].name);
        // $("#Result4").text(response.businesses[3].name);
        // $("#Result5").text(response.businesses[4].name);
    })
})