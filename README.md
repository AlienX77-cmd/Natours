# Natours App

The Natours is a web based application for a tour company that offers nature tours in North America. Users can browse the available tours and purchase them using a secure Stripe api.

## Table of contents

- [Overview](#overview)
  - [Description](#description)
  - [Screenshot](#screenshot)
  - [Tools](#tools)
  - [What I have learned](#what-i-have-learned)
  - [Useful Resources](#useful-resources)

## Overview

### Description

Users should be able to:

- Login (using the example account) to the web application
- View each exisitng tour details on the tour browse page
- Purchase desired tours using the secure Stripe API
- View personal profile and edit personal information
- View purcahsed tours under "Bookings" section in user profile

### Screenshot

![All tours](public/assets/all_tours.png)
![Tour details](public/assets/tour_details.png)
![Tour map](public/assets/tour_map.png)
![Login screen](public/assets/login.png)
![Admin user screen](public/assets/admin_user.png)
![Checkout screen](public/assets/checkout.png)
![My tours](public/assets/my-tours.png)

### Tools

- Node.js
- Express
- MVC architecture (MVC - Model, View, Controller)
- MongoDB Atlas
- Mongoose
- Postman
- JWT for authentication and authorization (using secure cookies)
- RESTful API design and development with advanced features: filtering, sorting, aliasing, pagination
- Advanced MongoDB: geospatial queries, aggregation pipeline, and operators
- Advanced data modelling: relationships between data, embedding and referencing
- Advanced error handling
- Server-side rendering with Pug templates
- Stripe payment portal implementation
- [Heroku](https://www.heroku.com/) - Hosting service

### What I have learned

This particular course is packed with content and there are too many things to list so I will try to keep it focused on what I felt was new and important in my personal journey.

- The content that I learned the most from was the advanced usage of MongoDB and Mongoose and the RESTFUL API developement. This includes the use of query strings and the development of query middleware and how to work with the request body. Building advanced data models that use child and parent referencing between them.

- How to use virtual population where you fetch referenced documents that are not persisted in the database and display them in the query result. An example of this is how each individual tour can have many reviews and the reviews have their own model. Rather than creating a reference that persists in the DB, which could contain hundreds of items, we can connect them through a virtual populate.

- Complex error handling. I learned how to separate the operational and programming errors. This way you can send useful messages to the user if something goes wrong with user error and keep the programming errors for use by only the developers. This system was difficult to learn and I'm still a little shaky on the details. Below is a flow chart that helps illustrates the error handling.
  ![Error handling](public/assets/Node-backend-architecture.jpg)

- Full payment implementation using Stripe. I have actully used stripe several times in the past but nothing close to how it was used in this project. I was unaware of what could be done with it such personalizing check out screens.

- This was the first time I have used server-side rendering using Pug and Pug templates and also the first time using parcel bundler. It was interesting to work through it but I found the flow not very straight forward overly complex at times. I would like to explore other ways of server-side rendering in the future.

### Useful Resources

- [Node.js Docs](https://nodejs.org/en/docs/)
- [Express Docs](https://expressjs.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Stripe API Docs](https://stripe.com/docs/api)
