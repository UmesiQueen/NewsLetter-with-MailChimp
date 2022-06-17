const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//provide a path for all external static files
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");

});

app.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/d3ed9fb454"

    const options = {
        method: "POST",
        auth: "queen:e27e9f8113c58fb3a121d397a8005c23-us8"
    }

    const request = https.request(url, options, function(response) {

        if (response.statusCode == 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            const mailchimpData = JSON.parse(data);
            console.log(mailchimpData);
        });
    });

    request.write(jsonData);

    request.end();
});

app.post("/failure", function(res, req) {
    req.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});

// API Keys 
// e27e9f8113c58fb3a121d397a8005c23-us8

//list id
//  d3ed9fb454