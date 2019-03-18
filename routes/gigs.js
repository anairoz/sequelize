const express = require('express');
const router = express.Router();

const db = require('../config/database');//to add data to db
const Gig = require('../models/Gig');//add model
//for like operator
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
//Get gig list
router.get('/', (req, res)=>  //res.sendStatus(200)  //fetch gigs in db
Gig.findAll()
    .then(gigs => {
        res.render('gigs', {    //gigs view and pass gigs
            gigs:gigs
        });
    })
    .catch((err) => console.log(err))
);
//Display add gig form
router.get('/add', (req, res) => res.render('add'))

// Add a gigs
router.post('/add', (req, res) =>{ //manualy
let  { title, technologies, budget, description, contact_email } = req.body; //pull out data
let = errors =[];

//Validate fields
if (!title) {
    errors.push({text: 'Please add a title'});
}
if (!technologies) {
    errors.push({text: 'Please add some technologies'});
}
if (!description) {
    errors.push({text: 'Please add a description'});
}
if (!contact_email) {
    errors.push({text: 'Please add a contact email'});
}

//check fpr errors
if(errors.length >0){
    res.render('add', { //rerend the form add view
        errors,         //array that includes all objects
        title,             //also add them all, send all this back not to be blank
        technologies,
        budget,
        description,
        contact_email
    } )
}else {
    if(!budget){
        budget = 'unknown'
    }else{
        budget = `$${budget}`;
    }
    technologies = technologies.toLowerCase().replace(/, /g, ',')//remopve space and lowercase
    // Insert into table
    Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email
    })
      .then(gig => res.redirect('/gigs'))
      .catch(err => console.log(err));
  }
});

//Search
router.get('/search', (req, res) => {
    let {term } = req.query;  //term = input name
    term = term.toLowerCase();//make lowercase
    Gig.findAll({ where: {technologies: { [Op.like]: '%' + term + '%'}}})//like operator
    .then(gigs => res.render('gigs', {gigs}))
    .catch(err => console.log(err))
})
module.exports = router;
