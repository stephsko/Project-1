var spoonApiKey = "73753e2422a4438c8dcb28a382d66b82";
var ingredient = "cheese";

queryURL = "https://api.spoonacular.com/recipes/search?apiKey=" + spoonApiKey + "&query=" + ingredient + "&number=3";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})


var yelpApiKey = "gHLb0y1DUUd4SfZtMn8zxnMMFKbzRHu76kPiYmq6YRxho6kU4EY-5c_9OF9k-2jUnl8MbrJk-9V-jijay4pKZQRyaFnxcfB8ufplveLn5pYWthT-WAtN_9bkUGf7XnYx";
var yelpSearch = "cheese";
var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?term=" + yelpSearch + "&location=Austin,TX";

$.ajax({
    url: "https://cors-ut-bootcamp.herokuapp.com/" + yelpQueryURL,
    method: "GET",
    headers: {
        "Authorization": "Bearer " + yelpApiKey
    }
}).then(function(response){
    console.log(response);
})
