/*
function hello(fn){

    fn();
  }
  undefined

  hello(1);

  error:
  VM80:3 Uncaught TypeError: fn is not a function
      at hello (<anonymous>:3:3)
      at <anonymous>:1:1
  hello @ VM80:3
  (anonymous) @ VM108:1*/


 /* let demo=function(){};
   undefined
   hello(demo);
   undefined


    let demo1 = () => {};
     undefined
     hello(demo1);*/


    /* let abc = function(){
  
        console.log("I am cool");
      }
      undefined
      hello(abc);
      VM847:3 I am cool

      undefined
      let fun = ()=>{
        
        console.log("I am cool");
      }
      undefined
      hello(fun);
      VM908:3 I am cool*/


     /*function demo(){

console.log("1");
console.log("2");
console.log("3");
console.log("2");
console.log("4");
console.log("6");
}
undefined
demo();
VM1194:3 1
VM1194:4 2
VM1194:5 3
VM1194:6 2
VM1194:7 4
VM1194:8 6
*/


//set interval

/*setInterval(function(){
 console.log("hello")},3000);


1
6VM122:2 hello
*/

/*function demo(){

    console.log("1");
    console.log("2");
    console.log("3");
    setInterval(function(){console.log(4,"hello")},3000);
    console.log("5");
    console.log("6");
    }
    undefined
    demo();
    VM351:3 1
    VM351:4 2
    VM351:5 3
    VM351:7 5
    VM351:8 6
    undefined
    8VM351:6 4 "hello"*/

/*Settimeout */
  /*setTimeout(function(){

    console.log("COOOL")
    }, 1000);
    1
    VM487:3 COOOL*/


  





























