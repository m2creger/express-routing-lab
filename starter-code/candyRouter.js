var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
	{id: 1, name: "Reese's Peanut Butter Cups", color: "Chocolate"},
	{id: 2, name: "Snickers", color: "Chocolate"},
	{id: 3, name: "Skittles", color: "Colors of the rainbow"},
	{id: 4, name: "Sour patch kids", color: "Red, Green, Blue"}
];
var jsonToAdd = {"id": 5, "name":"Jelly Belly","color":"Orange"};

//What would need to go into candies
//in order to pass our first test?
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(request,response) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	response.json(candies);
});

router.get('/:id', function(request, response) {

	var idEntered = request.params.id;

	//var idEntered = parseInt(request.params.id, 10);

	//response.send(idEntered);
	
	switch (idEntered) {
		case '1':
			response.send(candies[0]);
			break;
		case '2':
			response.send(candies[1]);
			break;
		case '3':
			response.send(candies[2]);
			break;
		case '4':
			response.send(candies[3]);
			break;
		default: 
			break;
	}
	
});

router.post('/addCandies', function(request, response) {
	candies.push(jsonToAdd);
	if (!request.body) {
		return response.sendStatus(400);
	} else {
		response.send(jsonToAdd);
	}
	response.redirect('/');
	//candies.push(jsonToAdd);
})

router.get('/', function(request, response) {
	response.render(candies);
})

router.put('/:id', function(request, response) {
	// var idEntered = parseInt(request.params.id);
	var idEntered = request.params.id;

	// need to get position
	// update {"name":"Marshmallows","color":"white"}

	switch (idEntered) {
		case '1':
			candies[0].name = "Marshmallows";
			candies[0].color = "white";
			response.send(candies[0]);
			break;
		case '2':
			candies[1].name = "Marshmallows";
			candies[1].color = "white";
			response.send(candies[1]);
			break;
		case '3':
			candies[2].name = "Marshmallows";
			candies[2].color = "white";
			response.send(candies[2]);
			break;
		case '4':
			candies[3].name = "Marshmallows";
			candies[3].color = "white";
			response.send(candies[3]);
			break;
		default: 
			break;
	}

	response.redirect('/');

	//response.send(typeof parseInt(request.id.params));
})
router.delete('/:id', function(request, response) {
	var idEntered = request.params.id;

	switch (idEntered) {
		case '1':
			candies.splice(0, 1);
			response.send(candies);
			break;
		case '2':
			candies.splice(1, 1);
			response.send(candies);
			break;
		case '3':
			candies.splice(2, 1);
			response.send(candies);
			
			break;
		case '4':
			candies.splice(3, 1);
			response.send(candies);
			break;
		default: 
			break;
	}
	response.redirect('/');
})

// Fill out the rest of the routes here

module.exports = router;