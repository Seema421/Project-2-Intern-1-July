const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    logoLink: {
        type: String,
        required: true,
    },
    isDeleted:
    {
        type: Boolean,
        default: false
    },
    // interns:{
    //     type:String,
    //     default:true
    // }
    

}, { timestamps: true });



module.exports = mongoose.model('College', collegeSchema)