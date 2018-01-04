const mongoose = require('mongoose')
const MONGODB_URL = require('./server.config').DB_URI

mongoose.connect(MONGODB_URL, { useMongoClient: true })
mongoose.Promise = global.Promise