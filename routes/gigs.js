const express = require('express');
const router = express.Router();

const db = require('../config/database');//to add data to db
const Gig = require('../models/Gig');//add model

//Get gig list
router.get('/', (req, res)=>  //res.sendStatus(200)  //fetch gigs in db
Gig.findAll()
    .then(gigs => {
        console.log(gigs);
        res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);
 // Gig.findAll()  //returns promise
	// .then(gigs => {        //gives gigs
	// 	console.log(gigs);
	// 	res.sendStatus(200);//
	// })
	// .catch(err => console.log(err)) );

//Add a gigs
// router.get('/add', (req, res) =>{
// 	const data ={
// 		title: 'Looking for a React developer',
// 		technology: 'react, javascript, html, css',
// 		budget: '$3000',
// 		description: 'Ahb cvdmk gfpfoeg. njdkslclnjd. cowpiecjw,  eufhpwi x , eifhwoenfclskjd , ekfjwpojaj faldc. hojwoefwef.',
// 		contact_email: 'user1@gmail.com'
// 	}
//
// 	let  { title, technology, budget, description, contact_email } = data;
// //Insert into table
// Gig.create({
// 	title,
// 	technology,
// 	budget,
// 	description,
// 	contact_email
// })
// 	.then(gig => res.redirect('/gigs'))
// 	.catch(err => console.log(err));
//
// });


module.exports = router;
