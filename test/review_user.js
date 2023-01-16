let server = require("../index");
let chaiHttp = require("chai-http");
const utils = require("../model/userSchema");
let routes = require("../routes/userRoutes");
const chai = require("chai")

chai.should();
chai.use(chaiHttp);

describe("Task API",() =>{
    //Test the Get resourceLimits
    it("IT should Return login user details :",(done) =>{
        const data = {
            email : "aman11117261155@gmail.com",
            password: "guptaji",
        };
        chai
        .request(server)
        .post("/user/login")
        .send(data)
        .end((err , res) =>{
            res.should.have.status(200);
            res.should.be.a("object");
            res.body.should.have.property("status").eq("success");
            res.body.should.have.property("message").eq("Login success");
            res.body.should.have.property("token");
                done();
        })
    }),
    it("IT should not Return login user details :",(done) =>{
        const data = {
            email : "aman11117261155@gmail.com",
            password: "guptajiiiiii",
        };
        chai
        .request(server)
        .post("/user/login")
        .send(data)
        .end((err , res) =>{
            res.should.have.status(200);
            res.should.be.a("object");
            res.body.should.have.property("status").eq("success");
            res.body.should.have.property("message").eq("Login success");
            res.body.should.have.property("token");
                done();
        })
    })
} )