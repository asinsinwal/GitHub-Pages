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
var issue_name="Bug Report - JSON" 
var issue_desc="Moving JSON data from DB to frontend is throwing an error."

createIssue(userId, userRepo, issue_name, issue_desc);


function createIssue(userName,userRepo,issue_name,issue_desc)
{
	var options = {
		url: urlRoot + '/repos/'+userName+'/'+userRepo+'/issues',
		method: 'POST',
		body: { title: issue_name, body: issue_desc, assignee: userName, },
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
		console.log('Issue creation:');
		console.log('name : '+body.title);
		console.log('URL: '+body.body);
		console.log(body);
	});
}

