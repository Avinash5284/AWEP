// array declaration

let arr = [];

let arr1=[1,2,3];
arr1;
(3) [1, 2, 3]

let arr2=['a','b','c'];
arr2;
(3) ["a", "b", "c"]

let arr3=['a','b','c',4,5];
arr3;
(5) ["a", "b", "c", 4, 5]

let arr4=['a','b','c',4,5.35,()=>{}];
arr4;
(6) ["a", "b", "c", 4, 5.35, ƒ]


//print all elements in array

let arr = ['akash','jayant','pratik','sagar'];
undefined
arr;
(4) ["akash", "jayant", "pratik", "sagar"]
for(let i =0;i<arr.length;i++){
  let item = arr[i];
  console.log(item);
}
VM725:3 akash
VM725:3 jayant
VM725:3 pratik
VM725:3 sagar

// access specific element


arr[0];
"akash"
arr[1];
"jayant"

// add and delete element from the array

arr.push("rav");
5
arr;
(5) ["akash", "jayant", "pratik", "sagar", "rav"]

arr.pop();
"rav"


/* Using splice addition and deletion


//add element*/

arr.splice(1,0,"cdac");
[]
arr;
(5) ["akash", "cdac", "jayant", "pratik", "sagar"]

/*delete element from certain index*/
arr.splice(1,1);

["cdac"] 













