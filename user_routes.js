

const express = require('express');




const user_routes = require('./routes/v1/users/user_routes');

//	Let's order all groups from frequently used routes to least use
const routes = [

	user_routes,

];

const app = express();
app(app, routes, options);




