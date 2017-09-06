var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + process.env.GITTOKEN;
var userId = process.env.GITUSERNAME;
var userRepo = "Hello-World";
var issueNo = 1

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

getYourBranches(userId, userRepo, issueNo);

function getYourBranches(userName, userRepo, issueNo)
{

	var options = {
		url: urlRoot + '/repos/' + userName + "/" + userRepo +"/issues/" + issueNo + "/reactions",
		method: 'GET',
		headers: {
			"User-Agent": "ListBranches",
            "content-type": "application/json",
            "Authorization": token,
            "Accept": "application/vnd.github.squirrel-girl-preview"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		for( var i = 0; i < obj.length; i++ )
		{
            var name = obj[i].name;
            var cont = obj[i].content;
            console.log('Reaction:[' + (i+1)  + '] ' + cont );
        }
	});

}


