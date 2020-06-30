var apiKey = "73753e2422a4438c8dcb28a382d66b82";
var ingredient = "cheese";

queryURL = "https://api.spoonacular.com/recipes/search?apiKey=" + apiKey + "&query=" + ingredient + "&number=3";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})