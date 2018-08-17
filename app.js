// import modules

var express = require('express')
var mongose = require('mongoose')
var bodyparser = require('body-parser')
var cors = require('cors')
var path = require('path')
var route = require('./routes/route')

var app = express()

// connect to mongoose
mongose.connect('mongodb://contactlist:dgtwa34892@ds125302.mlab.com:25302/heroku_l94dk3z2')

// on connection
mongose.connection.on('connected', () => {
  console.log('====================================')
  console.log('Database connected')
  console.log('====================================')
})
mongose.connection.on('error', (err) => {
  if (err) {
    console.log('====================================')
    console.log('error in db connection:' + err)
    console.log('====================================')
  }
})
// port no
const port = process.env.PORT || 8080;

// adding middleware --cors
app.use(cors())

// body-parser
app.use(bodyparser.json())

// static files
app.use(express.static(path.join(__dirname, 'public')))
// routes
app.use('/api', route)


app.listen(port, () => {
  console.log('server started at port', port)
})
