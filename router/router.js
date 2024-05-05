const express = require('express');
const rout = express.Router();
const animal = require('../model/animal')
// End points 
rout.get('/',async(req,res)=>{
    try {
        const animals = await animal.find();
        res.status(200).json(animals);
    } catch (error) {
        console.log(error+"error in get all request server");
    }
})

rout.post('/new',async(req,res)=>{
    try {
        const {name,legs} = req.body;
        const ani = await animal.create({
            name:name,
            legs:legs
        })
        res.status(200).json(ani);
    } catch (error) {
        console.log(error+"unable to create animal");
        res.status(401)
    }
})

rout.put('/update',async(req,res)=>{
    try {
        const {name,legs,id} = req.body;
        const ani = await animal.findByIdAndUpdate(id,{name:name,legs:legs},{new:true});
        res.status(200).json(ani);
    } catch (error) {
        console.log(error+" error in animal update");
    }
})

rout.delete('/delete',async(req,res)=>{
    const {id} = req.body;
    try {
        const ani = await animal.findByIdAndDelete(id);
        console.log("animal deleted");
        res.status(200).json("animal deleted sucessfully");
    } catch (error) {
        console.log(error+" failed to remove animal");
        res.status(301);
    }
})

module.exports = rout;