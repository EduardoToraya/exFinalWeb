const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
const config = require("../config.js")
const connectionURL =  process.env.connectionURL || 
	config.connectionURL 


mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
