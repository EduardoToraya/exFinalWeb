const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
const config = require("../config.js")
const connectionURL =  process.env.DB_CONNECTION_STRING || 
	config.connectionURL 


mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
