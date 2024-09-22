const { validateNumber, percentage } = require("../helper/common")
const Order = require("../models/order")
const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');
let API_URL=process.env.API_URL

exports.store_order = async (req,res)=>{
    try{
        if(!req.body.step){
            throw new Error("Please Provide step")
        }
        
        let step = req.body.step
        let _id = req.body._id 
        
        if(step > 1 && !_id){
            throw new Error("Please provide Id")
        }
        
        let orderdata = {}

        if(step==1){

            let {meal_category ,no_of_people } = req.body

            if(!meal_category){
                throw new Error("Please select Meal.")  
            }

            if(!no_of_people){
                throw new Error("Please select number of people.")  
            }

            let validNumber = validateNumber(no_of_people)

            if(!validNumber){
                throw new Error("Number of people value must be a number.")
            }
            let order = await Order.findOne({status:"pending"}).lean()
            let progress = percentage(4,step)

            if(!order){

                orderdata = new Order({
                    meal_category,
                    no_of_people,
                    step,
                    progress
                })
    
                await orderdata.save()
            }
            else{
                orderdata = await Order.findByIdAndUpdate(
                    order._id,
                    {
                        meal_category,
                        no_of_people,
                        step,
                        progress
                    },
                    {new :true}
                )
            }

        }
        else if(step==2){

            let {restaurant} = req.body

            if(!restaurant){
                throw new Error("Please select restaurant.")  
            }

            if(!_id){
                throw new Error("Please provide Id")
            }

            let progress = percentage(4,step)
            orderdata = await Order.findByIdAndUpdate(
                _id,
                {
                    restaurant,
                    step,
                    progress
                },
                {new :true}
            )

        }
        else if(step==3) {

            let {dishes , no_of_people} = req.body

            if(!dishes){
                throw new Error("Please select dishes.")  
            }

            if(dishes.some(val=> !val.name)){
                throw new Error("Please Select the dish for all the servings with dishes.")
            }

            if(dishes.some(val=> !val.servings)){
                throw new Error("Please Select the servings for all the dishes.")
            }

            if(!dishes.every(val=> Number(val.servings) >= Number(no_of_people) )){
                throw new Error("Number of serving must be greater then or equals to Number of people.")
            }

            let oldOrderData = await Order.findOne({_id:_id,status:"pending"})

            if(!oldOrderData){
                throw new Error("please select the meal first!!!")
            }

            if(!oldOrderData.restaurant || oldOrderData?.restaurant == ""){
                throw new Error("please select the restaurat!!!")
            }

            let progress = percentage(4,step)
            // let status = 'completed'

            orderdata = await Order.findByIdAndUpdate(
                _id,
                {
                    dishes,
                    step,
                    progress,
                    // status
                },
                {new :true}
            )
        }
        else{
            let status = req.body.status ?  req.body.status : 'completed'
            let progress = percentage(4,step)

            orderdata = await Order.findByIdAndUpdate(
                _id,
                {
                    progress,
                    status
                },
                {new :true}
            )
        }

        res.status(200).send({
            data : orderdata,
            message : "Orderdata added succesfully.",
            status : "success"
        })
    }
    catch(err){
        console.log("err",err)
        res.status(400).send({
            data : {},
            message : err.message,
            status : "failed"
        })
    }
}

exports.export_all_order = async (req,res)=>{
    try{

        if(!req.body._id){
            throw new Error("Please provide order id")
        }

        let orders = await Order.find({_id: req.body._id}).lean()

        const csvRows = [];
        csvRows.push([
            'Order ID',
            'Meal Category',
            'Number of People',
            'Restaurant',
            'Status',
            // 'Progress',
            // 'Step',
            // 'Created At',
            // 'Updated At',
            'Dish Name',
            'Dish Number of Servings'
        ]);
    
        // Process each order
        orders.forEach(order => {
            // Create a base row for the order
            const baseRow = [
            order._id,
            order.meal_category,
            order.no_of_people,
            order.restaurant,
            order.status,
            // order.progress,
            // order.step,
            // order.createdAt,
            // order.updatedAt,
            ];

            if (order.dishes.length > 0) {
                order.dishes.forEach((dish, index) => {
                const row = index === 0 ? baseRow : new Array(baseRow.length).fill('');
                csvRows.push([
                    ...row,
                    dish.name,                 
                    dish.servings       
                ]);
                });
            } else {
                csvRows.push([
                ...baseRow,
                '',   
                ''    
                ]);
            }
        });
  
      
      const csv = csvRows.map(row => row.join(',')).join('\n');

        const fileName = `orders.csv`;
        const fileDirectory = path.join(__dirname, '../exports');
        const filePath = path.join(fileDirectory, fileName);

        if (!fs.existsSync(fileDirectory)) {
        fs.mkdirSync(fileDirectory);
        }

        fs.writeFileSync(filePath, csv);

        const fileUrl = `${API_URL}/exports/${fileName}`;

        res.status(200).send({
            data : {csv : fileUrl},
            message : "CSV export Succesfully.",
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