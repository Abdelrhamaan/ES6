// console.log("ahmed")

// let x = 10;
// let x l
// // x = 12 ;

// console.log(x);


//---------- arrow function-------------- 
// let x = (name) => console.log(name);

// x("ahmed")

// let x = _=> 2;

// console.log(x());


// let y = () => "karim"
// console.log(y());
// console.log(y);

// var z = (name,age) => {
//     console.log(name,age)
// }
// z("ahmed",20)
// var z = (name,age) =>  console.log(name,age)
// z("nade",25)
// var k = (age) =>  {return (age)}
// console.log(k(22));
// var f = (age) =>  (age)
// console.log(f(28));
// var zx = _=>  15
// console.log(zx());


// ---------spraed operator-------------

// let oldArr = [1,2,3,4,5,6]
// let newArr = [...oldArr,7,8,9]
// console.log(oldArr);
// console.log(newArr);


// let oldObj = {
//     name:"ahmed",
//     age:28
// }

// console.log(oldObj);

// let newObj = {
//     id : 1,
//     ...oldObj,
//     name:"nader" // here he will override its a spread operator
// }


// console.log(newObj);


// let sum = (...args) => {
//     // return args[0];
//     return args.filter((item) => item === 20 )
// }

// console.log(sum(2,5,18,20));



// -------------destructring-------------

// const arr = [1,2,3,5,10,15];
// const [a,b,c,d,e,f] = arr;
// console.log(a,f);

// const obj = {id:"1",
//     name:"nader"
// }

// const {name} =obj
// console.log(name);


// =========================================
// --------here i made the two variables on the same refernce------
// let stud = {
//     name :"nader"
// }

// console.log(stud.name);

// let stud2 = stud

// stud.name = "ali"

// console.log(stud2.name);

// --------here i made a new refernce------  


// let stud = {
//     name :"nader"
// }

// // console.log(stud.name);

// let stud2 = {...stud}

// stud.name = "ali"

// console.log(stud2);
// ===========================================

// let arr = [1,2,5,6,8,9]

// let newArr = arr.map((item)=>{
//     return item+1
// })

// console.log(arr);
// console.log(newArr);

// ================================================

// const arr = ['a','b','c','d']
// const newArr = arr.slice(2)  // slicing array old array dont changing
//const newArr2 = arr.splice(2) // slicing array old array is changing
// console.log(arr);
// console.log(newArr2);
// console.log(newArr);
// reverse ---> reverse array 
// concat ----> concat to arrays 
// join ----> view elem with join elem 
// ==================================================
// ----------filter,reduce,find,sort method -------------
// const arr = [1,2,3,4,5,6]

// const arr2 = arr.filter(item => item > 4)
// const arr0 = arr.reduce((total , current) => total +current ,0) // sum or concat elem
// const arr3 = arr.find(item => item > 3) ////return first elem

// console.log(arr2);
// console.log(arr0);  
// console.log(arr3);
// ==================================================
// -----------------Higher order function --------------


// function 
// const lowerCase = (str) => {
//     return str.toLowerCase()
// }

// // higher order function ----> -1 func take func as param
// const transform = (word , func) => {
//     // here it become callBackFunc
//     return func(word)
// }

// console.log(lowerCase("NADER"));
// console.log(transform("NADER" , lowerCase));

// // higher order function ----> -2 func return another func 
// const sayHello = (welcome) => {
//     return ((name)=>{
//         console.log(`${welcome} ${name}`);
//     })
// }

// const say = sayHello("welcome")

// console.log(say("nader"));

// =====================================================
// async sync promises , multi promises

// console.log("ahmed");

// var a = prompt("Enter your name")
// console.log(a);

// console.log("nader");

//----------- single promise -----------

// let myPromise = new Promise((success, failed) => {
//     const x = 1;
//     if (x === 1) {
//       success("this is ok");
//     } else {
//       failed("this is not ok");
//     }
//   }).then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject)
//   );
// -------------multi promise----------
// let eat = true;
// let play = false;
// let sleep = true;

// let eating = new Promise ((success,failed) => {
//     if(eat){
//         success("i am eating")
//     }else{

//         failed("i am not eating")
//     }
// })
// let playing = new Promise ((success,failed) => {
//     if(play){
//         success("i am playing")
//     }else{

//         failed("i am not playong")
//     }
// })
// let sleeping = new Promise ((success,failed) => {
//     if(sleep){
//         success("i am sleeping")
//     }else{

//         failed("i am not sleeping")
//     }
// })
// eating.then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject)
// );
// playing.then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject)
// );
// sleeping.then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject)
// );
// ---------------------------------------------
// let eat = true;
// let play = true;
// let sleep = false;

// let eating = new Promise ((success,failed) => {
//     if(eat){
//         success("i am eating")
//     }else{

//         failed("i am not eating")
//     }
// })
// let playing = new Promise ((success,failed) => {
//     if(play){
//         success("i am playing")
//     }else{

//         failed("i am not playong")
//     }
// })
// let sleeping = new Promise ((success,failed) => {
//     if(sleep){
//         success("i am sleeping")
//     }else{

//         failed("i am not sleeping")
//     }
// })
// eating.then(
//     (resolve) => {
//         console.log(resolve)
//         playing.then(
//             (resolve) => {
//                 console.log(resolve)
//                 sleeping.then(
//                     (resolve) => console.log(resolve),
//                     (reject) => console.log(reject));},
//             (reject) => console.log(reject)
//         );},
//     (reject) => console.log(reject)
// );
// =================================================

// -------------async await ----------------------------

let eat = true;
let play = false;
let sleep = true;

const EATING =()=>{
    return new Promise ((success,failed) => {
        if(eat){
            success("i am eating")
        }else{
    
            failed("i am not eating")
        }
    })
}

const PLAYING = () =>{
    return new Promise ((success,failed) => {
        if(play){
            success("i am playing")
        }else{
    
            failed("i am not playong")
        }
    })
}
const SLEEPING = () => {
    return new Promise ((success,failed) => {
        if(sleep){
            success("i am sleeping")
        }else{
    
            failed("i am not sleeping")
        }
    })
}


const runPromise = async ()=>{
    try{
        const eatMessage = await EATING()
        console.log(eatMessage);
        const playMessage = await PLAYING()
        console.log(playMessage);
        const sleepMessage = await SLEEPING()
        console.log(sleepMessage);
    }catch (error) {console.log(error)};
}

runPromise()    