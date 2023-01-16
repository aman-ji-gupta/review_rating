//Should style
var should = require('chai').should();
var chai = require('chai');
var numbers = [1,2,3,4,5];
let name = "aman";
let list = {
    item:[{
        'id':101,
        'name':"aman",
        "email" : "aman@gmail.com"
    }],
    title : 'Emp Details'
}

name.should.be.an('string').that.includes('a');
numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);

//Assert Style
var assert = require("assert");