
let chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../index")
//Assertion style
chai.should();
chai.use(chaiHttp);

describe("Task API",() =>{
    //Test the get route
    describe("GET /api/tasks", () =>{
        it("it should get all the task" , (done) =>{
            chai 
            .request(server)
            .get("/test/api/tasks")
            .end((err , res) =>{
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.be.eq(3);
                done();
            })
        }) 

        it("IT should not get all the tasks" , (done) =>{
            chai
            .request(server)
            .get("/test/api/tasksk")
            .end((err,res) =>{
                res.should.have.status(404)
                done();
            })
        })

    })
})