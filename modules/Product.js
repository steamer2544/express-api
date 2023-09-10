const mongoose = require('mongoose'); //เรียกใช้ mongoose

const ProductSchema = new mongoose.Schema({
    prod_name: String,
    prod_desc: String,
    prod_price: Number,
    updated_at: { type: Date, default: Date.now } //update ตอนนี้

})

module.exports = mongoose.model('Product', ProductSchema) //ส่งข้อมูล productSchema มา