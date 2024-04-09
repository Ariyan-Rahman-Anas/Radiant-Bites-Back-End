const mongoose = require("mongoose")

function db_config() {
    mongoose.connect(`${process.env.DB_URI}`)
        .then((data) => {
        console.log("MongoDB is connected!")
        })
        .catch((err) => {
        console.log("MongoDB connecting error is: ", err)
    })
}
module.exports = db_config