var apiKey = "gHLb0y1DUUd4SfZtMn8zxnMMFKbzRHu76kPiYmq6YRxho6kU4EY-5c_9OF9k-2jUnl8MbrJk-9V-jijay4pKZQRyaFnxcfB8ufplveLn5pYWthT-WAtN_9bkUGf7XnYx";
var search = "";
var queryURL = "https://api.yelp.com/v3/businesses/search" + search + "&api-key=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
})

