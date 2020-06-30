var yelpApiKey = "gHLb0y1DUUd4SfZtMn8zxnMMFKbzRHu76kPiYmq6YRxho6kU4EY-5c_9OF9k-2jUnl8MbrJk-9V-jijay4pKZQRyaFnxcfB8ufplveLn5pYWthT-WAtN_9bkUGf7XnYx";
var search = "cheese";
var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?term=" + search + "&location=Austin,TX";

$.ajax({
    url: "https://cors-ut-bootcamp.herokuapp.com/" + yelpQueryURL,
    method: "GET",
    headers: {
        "Authorization": "Bearer " + yelpApiKey
    }
}).then(function(response){
    console.log(response);
})

