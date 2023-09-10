const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../modules/Product.js');

router.get('/', (req, res, next) => {
    Product.find({})
        .then(products => {   // new find process ของ mongoose ใช้แทน find แบบเดิม
            res.json(products); //Process the results
        })
        .catch(err => {
            return next(err);
        });
    
    /*Product.find((err, products) => { //method find หาข้อมูลทั้งหมดในฐานข้อมูล
        if (err) return next(err); // Handle the error
        res.json(products); //Process the results
    })*/
});//end point หรือว่า route ตัวแรก ซึ่งสำหรับ get ข้อมูล product ทั้งหมด

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Product.findById(req.params.id); //Use async/await with try-catch for error handling 
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const post = await Product.create(req.body); //Use async/await with try-catch for error handling 
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => { //update
    try {
        const post = await Product.findByIdAndUpdate(req.params.id, req.body); //Use async/await with try-catch for error handling 
        res.json(post);//                                          ข้อมูลตัวใหม่ที่ต้องการ update
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => { //update
    try {
        const post = await Product.findByIdAndDelete(req.params.id); //Use async/await with try-catch for error handling 
        res.json(post);//                                          ข้อมูลตัวใหม่ที่ต้องการ update
    } catch (err) {
        next(err);
    }
});

/*router.post('/', (req, res, next) => {
    Product.create(req.body,(err, post) => {//ดึงเอา product ที่เป็น model มา แล้วใช้ method create(เพิ่ม หรือสร้างข้อมูล)
        if(err) return next(err); //error return แล้วเรียกใช้ฟังชั่น next ส่ง error ไป
        res.json(post); //responce ส่งข้อมูล json กลับมา(ข้อมูลที่เราเพิ่มเข้าไป)
    }) 
})  // รับค่า req.body มา(เวลาจะเพิ่มข้อมูลมันจะมีการส่ง req มาแล้วมันจะอยู่ใน req.body)*/

module.exports = router;