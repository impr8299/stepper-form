const axios = require('axios');

exports.restaurants = async (req,res)=>{
    try{

        let orderdata = []
        await axios.get('https://yudiz-solution.s3.ap-south-1.amazonaws.com/dishes.json')
         .then((res)=>{
            orderdata = res.data
         })
         .catch((err)=>{
            throw new Error(err.message)
         })      

        res.status(200).send({
            data : orderdata,
            message : "restaurants fetched Succesfully.",
            status : "success"
        })
    }
    catch(err){
        console.log(err)
        res.status(400).send({
            data : {},
            message : err.message,
            status : "failed"
        })
    }
}