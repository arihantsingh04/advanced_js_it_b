//*****************part1********************
// function sayhello(){
//     let you=prompt("what's your name");
//     console.log("Hello "+ you +" !");
    
// }
// sayhello()

//------------------part 2*****************


// let vcf = function(){
//     let vif = "i'm in a function";
//     console.log("hi there!", vif);
// };

// vcf();

/////*******************part3*********************

// function tester(p1,p2){
//     return p1+" "+p2;
// }
// const arg1="heyyy";
// const arg2="youuu";
// console.log(tester(arg1,arg2));

//*******************part4*************************

// function add(a,b){
//     console.log(a+b);
// }
// var n1 =parseInt(prompt("enter a: "));
// var n2 =parseInt(prompt("enter b: "));
// add(n1,n2);

//////////****part 5 *//////////

// function add(a,b){
//     console.log(a+b);
// }
// var n1 =2;
// var n2 =5;
// add();


//*****************part 6 ***************************

// function add(x=2,y=3){
//     console.log(x+y);
// }
// add(1,2,3,4);

//******************part 7 arrow function************************
// let doingstuff=x=> console.log(x);
// doingstuff("hi there!");


//*****************part 8***************************
// const arr = ["squirrel", "cat", "dog", "fox"];
// arr.forEach(e=>console.log(e));

// *****************special operators - SPREAD OPERATORS********************
// let spread = ["so","much","fun"];
// let msg=["javascript","is",...spread,"and","awesome"];
// console.log(msg);

// function atn(x,y){
//     console.log(x+y);
// }
// let arr=[5,2];
// let arr1=[4,1];

// atn(...arr1,...arr);

// function atn(x, y, z, w) {
//     console.log(x + y + z + w);
// }
// let arr = [5, 2];
// let arr1 = [4, 1];

// atn(...arr1, ...arr);

// *****************special operators - REST OPERATORS********************  

// function sf(p1,...p2){
//     console.log(p1,p2);
// }
// sf("hi","there", "how", "are","you");

// function atn(a,b){
//     console.log(a+b);
// }
// let result = atn(4,5);
// console.log(result);

// let ra=[];
// for(let i=0;i<10;i++){
//     let result = atn(i,2*i);
//     ra.push(result);
// }
// console.log(ra);

// let atn=(x,y)=>x+y;
// let result = atn(12,5);
// console.log(result);

// let atn = (x,y) =>{
//     console.log("Adding...");
//     return x+y;
// }

// function testAvail(x){
//     console.log("available: "+x);
// }
// testAvail("hii!");
// console.log("not available!",x);


// function testAvail(y){
//     let y="local variable";
//     console.log("available: "+y);
// }
// testAvail();
// console.log("not available!",y);

// function ds(){
//     if (true){
//         console.log(x);
//         let x = "local";
//     }
// }
// ds();

//*****************constant scope**********************
// function ds(){
//     if(true){
//         const x = "local";
//     }
//     console.log(x);

// }
// ds();

//********************global scope*************************
// let x="global";
// function ds(x){
//     console.log(x);
// }
// ds("param");

// function confuseReader(){
//     x="guess my scope...";
//     console.log("inside",x);
// }
// confuseReader();
// console.log("outside",x);