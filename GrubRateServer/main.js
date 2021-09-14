/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const server = express();
const port = 3000;

// array of submissions and reviews
var reviews = {};

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(cors());

//add / create function
server.post("/index", function (request, reply) {
    // variable to check connection to server and post was succesful.
    var verify = false;

    if (request.body) {
        if (!reviews[request.body.name]) { //Remember to try to fix name error!!!
            reviews[ request.body.name ] = {
                "name": request.body.name,
                "restaurant": request.body.restaurant,
                "location": request.body.location,
                "review": request.body.review,
                "rating": request.body.rating
            };
            verify = true;
        }

        if (verify) {
            reply.send("Review Successfully Created!");
        } else {
            reply.send("Failed to create Review!");
        }
    }
});

//retrieve function
server.get("/review", function (request, reply) {
    reply.json(reviews);
});

server.get('/index', function (reply) {
    console.log();
    reply.send();
});

//delete function
server.post("/review", (request, reply) => {
    var verify = false;

    if (request.body) {
        if (reviews[request.body.name]) {
            delete reviews[request.body.name];
            verify = true;
        }
    }

    if (verify) {
        reply.send("Review has succesfully been deleted!");
    } else {
        reply.send("Review has failed to delete!!");
    }
});

// Update function
server.post("/update", (request, reply) => {
    var review;
    var verify = false;
    
    if(request.body){
        if(reviews[request.body.name]){
            review = {
                "name": request.body.name,
                "restaurant": request.body.restaurant,
                "location": request.body.location,
                "review": request.body.review,
                "rating": request.body.rating
            };
            reviews[request.body.name] = review;
            verify = true;
        }
    }
    if(verify){
        reply.send("Review successfully updated!!");
    }
    else{
        reply.send("Review failed to update!!")
    }
});

server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


