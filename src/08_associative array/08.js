// let user={
//     name:"John",
//     age:49,
//     address:{
//         city:{
//          title:"London"
//         }
//     }
// }

const streetName=user.address.city.title
const streetName2=user["address"]["city"]["title"]

let city={}
city.title="Paris"
city["citizensCount"]=100

// let users=["John","Bob","Ann"]
// let firstUser=users[0]
// let firstUser=users["0"]
// users["map"]((el)=>el.toUpperCase())

let usersObj={
    "0":"John",
    "1":"Bob",
    "2":"Ann"
}

let myUser=usersObj[0]
usersObj["0"]="Super Mario"

usersObj["table"]="wood"
usersObj["hello, how are you?"]="fine!"

Object.keys(usersObj)
Object.values(usersObj)

let case1=usersObj[0]
usersObj[null]="something"
let case2=usersObj[null]
usersObj[{}]="hello"
let case3=usersObj[{name: 'John',toString(){return "blabla"}}]
