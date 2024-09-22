const mongoose = require('mongoose')
const DBURL=process.env.DBURL

exports.DB_CONNECTION = mongoose.connect(DBURL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(()=>{
        console.log("DB Connected Successfully.")
    })
    .catch((err)=>{
        console.log(err)
        console.log("DB connection ERROR!!!!")
    })