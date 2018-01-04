const prod = process.env.NODE_ENV === 'production'

module.exports = {
    DB_URI: prod ? 'mongodb://localhost:27017/iteck_prod' : 'mongodb://localhost:27017/iteck',

}