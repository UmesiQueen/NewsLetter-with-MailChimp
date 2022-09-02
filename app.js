const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const apiKeys = require("./apiKeys")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

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

    const url = "https://us8.api.mailchimp.com/3.0/lists/" + apiKeys.audienceId;

    const options = {
        method: "POST",
        auth: apiKeys.mailChipAPIKey + "-us8"
        }

    const request = https.request(url, options, function(response) {

        if (response.statusCode == 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            const mailChimpData = JSON.parse(data);
            // console.log(mailChimpData);
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

