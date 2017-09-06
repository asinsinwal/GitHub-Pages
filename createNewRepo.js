var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + process.env.GITTOKEN;
var userId = process.env.GITUSERNAME;
var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3
var repoName = "Hello-World";

createRepo(repoName);

function createRepo(repoName)
{

	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
        },
        json: {
            "name": repoName,
            "description": "This repository is created automatically, using node.js script.",
            "homepage": "https://github.com",
            "private": false,
            "has_issues": true,
            "has_projects": true,
            "has_wiki": true
          }
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) {
        
        if( body )
        {
            console.log(body);
        }
        
    });

}



