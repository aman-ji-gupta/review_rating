// var fs=require("fs");
// var http = require("http")

// http.createServer(function(req,res){
//     // var content = ''
//     // var reader = fs.createReadStream('demo.txt');
//     // reader.setEncoding('utf-8')
//     // reader.on('err',function(err){
//     //     console.log(err);
//     // }).on('data',function(chunk){
//     //     content+=chunk;
//     // }).on('end',function(){
//     //     res.on('erro',function(err){
//     //         console.log(err);
//     //     })
//     //     res.setHeader('200',{'content-Type' : 'plain/text'})
//     //     res.write(content);
//     //     res.end()
//     // })


//     var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data,'utf-8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });

// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });
// res.end()
// }).listen(9000,()=>{
//     console.log("server started...!");
// })

// var description = "good morning sir , my name is aman gupta i born and brought up in indore . i have done my schooling from shri cloth market vaishav higher secondary school. with having deep interest in computer science domain i chose iformation technology and currently pursuing my seventh sem from indore institute of scinece and technology. i have made my minor project using jsp and servlets and the name of my project "
// var document="this is a demo document"

// // var i=13;
// // do{
// //     console.log(i);
// //     i=i-3;
// // }
// // while(i>=1)

// //object ko kaise print krana h loop se
// //for in loop, fir of loop , 
// // let letters = ["a","b","c","d","e",]
// // for(let letter of letters){
// //     console.log(letter);
// // }


// // const obj = { a: 1, b: 2, c: 3 };

// // for (const ab in obj) {
// //   console.log(`obj.${ab} = ${obj[ab]}`);
// // }
// // // //scoping
// // // function func(){
// // //     var a=10;
// // //     if(a==10){
// // //         var b=20;
// // //         console.log(x);
// // //         console.log(y);
// // //     }
// // // }

// // func();
// // console.log(x);
// // console.log(y);


// // //array
// // const arr = ["aman","darshan","ramesh",1,2,3,true];
// // const arr2 = [7,8,9,10,1,2,5,9,6];
// //  arr2.splice(2,1,11,22,33);
// // // arr.push(arr2)
// // // arr[3]=4;
// // for (let i = 0; i< arr2.length ; i++){
// // console.log(arr2[i]);
// // } 

// // var buffer =Buffer.alloc(10);
// // console.log(buffer);
// // buffer.write("hello class");
// // console.log(buffer);
// // var buffer = Buffer.from("welcome");
// // console.log(buffer);

const student = [
    {name : "aman",roll : 31 , marks : 80},
    {name : "jenny",roll : 15 , marks : 80},
    {name : "kaushal",roll : 16 , marks : 35},
    {name : "dilprit",roll : 7 , marks : 55}
]

// const data = student.map( (stu)=>{
//     if(stu.marks<60){
//         stu.marks+=20;
//     }
//     return stu;
// }).filter((stu)=>stu.marks>60)
// .reduce((acc,curr)=>acc+curr.marks,0);
// console.log(data);

var c= student.sort((a,b)=>{
    return a.roll - b.roll ;
})
console.log(c);