const express = require('express')
const exphpd = require('express-handlebars')
const bodyAParser = require('body-parser')
const path = require('path')//add all modules we added to npm

//Database
const db = require('./config/database')//add databasefile

//Test DB
db.authenticate()//check connection
.then(()=> console.log('Database connected...'))
.catch(err => console.log('Error:'+err))

const app = express(); //initilize app

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))
//index route  get request
app.get('/', (req, res) => res.send('INDEX'));// /-index page, function get responces and send  text to browser

//gig routes
app.use('/gigs', require('./routes/gigs'));//

const PORT = process.env.PORT || 5000; 	//create port?

app.listen(PORT, console.log(`Server started on port ${PORT}`));//run server
