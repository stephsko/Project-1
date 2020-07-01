var recipeBtn = $("#button-addon1");
var restaurantBtn = $("#button-addon2");
var searchEl = $("#textInput");


recipeBtn.on("click", function(){
    var ingredientSearch = (searchEl.val());

    var spoonApiKey = "73753e2422a4438c8dcb28a382d66b82";
    var spoonQueryURL = "https://api.spoonacular.com/recipes/search?apiKey=" + spoonApiKey + "&query=" + ingredientSearch + "&number=5";
   
    $("#searchResults").attr("style", "display: visible;");
    $.ajax({
        url: spoonQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        for (var i = 1; i <= response.results.length; i++) {
            var recipeImage = $("<img src='' alt='' id='recipeImage" + i +"' style='border-radius: 50%; margin: 5px;'>");
            var fileExtension = response.results[i-1].image.split(".").pop();
            
            recipeImage.attr("src", "https://spoonacular.com/recipeImages/" + response.results[i-1].id + "-90x90." + fileExtension);
            

            $("#Result" + i).text(" " + response.results[i-1].title);
            $("#Result" + i).prepend($(recipeImage));
        }

    })
})

restaurantBtn.on("click", function(){
    $("#searchResults").attr("style", "display: visible;");
    $.ajax({
        url: "https://cors-ut-bootcamp.herokuapp.com/" + yelpQueryURL,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + yelpApiKey
        }
    }).then(function(response){
        console.log(response);

        for (var i = 1; i <= response.businesses.length; i++){
            $("#Result" + i).text(response.businesses[i-1].name);
        }
       
    })
})
