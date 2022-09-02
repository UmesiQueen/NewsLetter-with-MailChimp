# NewsLetter Subscription

This solution is from Angela Yu's Udemy Web Development Boot Camp Course - Section 20.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Requirement](#requirement)
  - [Summary](#summary)
- [Author](#author)

## Overview
  - More with Nodejs and Express
  - Implementing API's to project (MailChimp)  
  - Retrieving live data from api location, parse and render into website

### Screenshot
 ![Alt text](public/images/Screenshot.png?raw=true)

### Links

- Deployed Live site with Heroku - [Click to View](https://nameless-atoll-36486.herokuapp.com/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- NodeJs
- Express
- MailChimps API


### Requirement

- run _npm install_ on terminal

- Must have an account with MailChimp,
  - If you do not have an account, create one on [mailchimp.com]https://mailchimp.com/)
  - Locate and copy you personal **Audience Id** and **API key**

- In the root directory create a new file named **apiKeys.js** 
  - In new file, Create variable **mailChimpAPIKey** and assign anyString: apiKey retrieved. ie "JohnDoe:apiKey"
  - Create **audienceId** and assign retrieved value
  - export variables

######**apiKeys.js** code snippet
```
exports.mailChimpAPIKey = "JohnDoe:fdf****e58-us8";  
exports.audienceId = "d3e****454";  

```

More info read [Mailchimps API Docs](https://mailchimp.com/developer/marketing/docs/fundamentals/)

That's all you'll Need.

Happy coding!💙💚


## Author

- Website - [UmesiQueen](https://umesiqueen.github.io/UmesiQueen/)
- Twitter - [@UmesiQueen](https://www.twitter.com/UmesiQueen)


