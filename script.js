var recipeBtn = $("#button-addon1");
var restaurantBtn = $("#button-addon2");
var searchEl = $("#textInput");

var modalTitle = $(".modal-title");
var modalImage = $("#modalImage");
var modalDescription = $("#modalDescription");
var modalLink = $("#modalLink");
var modalDescription2 = $("#modalDescription2");

function populateRecipeModal(response, button) {
    modalTitle.empty();
    modalImage.empty();
    modalDescription.empty();

    var id = 0;

    if (button.id === "Result1") {
        id = 1;
    } else if (button.id === "Result2") {
        id = 2;
    } else if (button.id === "Result3") {
        id = 3;
    } else if (button.id === "Result4") {
        id = 4;
    } else if (button.id === "Result5") {
        id = 5;
    }

    var recipeURL = response.results[id-1].sourceUrl;

    var modalImageEl = $("<img src='' alt='' id='" + button.id + "' style='border-radius: 50%; margin: 5px;'>");
    var fileExtension = response.results[id - 1].image.split(".").pop();

    modalImageEl.attr("src", "https://spoonacular.com/recipeImages/" + response.results[id - 1].id + "-90x90." + fileExtension);
    

    modalTitle.text(response.results[id - 1].title);
    modalImage.prepend(modalImageEl);  
    modalDescription.text("Ready in: " + response.results[id -1].readyInMinutes + " minutes.");
    modalDescription2.text("Serves: " + response.results[id - 1].servings);
    modalLink.attr("href", recipeURL).text("Recipe!");
    
    
}


recipeBtn.on("click", function(){
    var ingredientSearch = (searchEl.val());

    var spoonApiKey = "73753e2422a4438c8dcb28a382d66b82";
    var spoonQueryURL = "https://api.spoonacular.com/recipes/search?apiKey=" + spoonApiKey + "&query=" + ingredientSearch + "&offset=1&number=5";
   
    $("#searchResults").attr("style", "display: block;");
    $.ajax({
        url: spoonQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 1; i <= response.results.length; i++) {
            if (ingredientSearch == "") {
                $("#searchResults").attr("style", "display: none;");
                break;
            }
            var recipeImage = $("<img src='' alt='' id='recipeImage" + i + "' style='border-radius: 50%; margin: 5px;'>");
            var fileExtension = response.results[i - 1].image.split(".").pop();

            recipeImage.attr("src", "https://spoonacular.com/recipeImages/" + response.results[i - 1].id + "-90x90." + fileExtension);


            $("#Result" + i).text(" " + response.results[i - 1].title);
            $("#Result" + i).prepend($(recipeImage));
        }

        $('#Result1, #Result2, #Result3, #Result4, #Result5').on("click", function(){
            populateRecipeModal(response, event.currentTarget);
            $('.modal').modal('show'); 
            
        })

    })
})

restaurantBtn.on("click", function () {
    var yelpApiKey = "gHLb0y1DUUd4SfZtMn8zxnMMFKbzRHu76kPiYmq6YRxho6kU4EY-5c_9OF9k-2jUnl8MbrJk-9V-jijay4pKZQRyaFnxcfB8ufplveLn5pYWthT-WAtN_9bkUGf7XnYx";
    var yelpSearch = (searchEl.val());
    var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?term=" + yelpSearch + "&limit=5&location=Austin,TX";

    $("#searchResults").attr("style", "display: block;");
    $.ajax({
        url: "https://cors-ut-bootcamp.herokuapp.com/" + yelpQueryURL,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + yelpApiKey
        }
    }).then(function (response) {
        console.log(response);

        for (var i = 1; i <= response.businesses.length; i++) {
            if (yelpSearch == "") {
                $("#searchResults").attr("style", "display: none;");
                break;
            }
            
            var restaurantImage = $("<img src='' alt='' id='restaurantImage" + i + "' style= 'height: 90px; width: 90px; border-radius: 50%; margin: 5px;'>");


            restaurantImage.attr("src", response.businesses[i - 1].image_url);


            $("#Result" + i).text(response.businesses[i - 1].name);
            $("#Result" + i).prepend($(restaurantImage));
        }

    })

})

$('.modal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
