var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + process.env.GITTOKEN;
var userId = process.env.GITUSERNAME;
var userRepo = "Hello-World";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3
var has_wiki_bool = true

editRepo(userId, userRepo, has_wiki_bool);

function editRepo(userId,userRepo,has_wiki)
{
	var options = {
		url: urlRoot + '/repos/' + userId + '/' + userRepo,
		method: 'PATCH',
        body: { name: userRepo, has_wiki: has_wiki_bool },
		json: true,

		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};
	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
        console.log(body);
        //Playing with JSON
		//var obj = JSON.parse(body);
		//console.log( obj );
	});
}
