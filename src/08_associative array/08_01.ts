export type usersType={
    [key:string]:UserType
}
export type UserType={
    id:number
    name:string
}
const users:usersType = {
    '100': {id: 100, name: "John"},
    '765': {id: 765, name: "Bob"},
    '234': {id: 234, name: "Bob"},
    '123': {id: 123, name: "Bob"}
}

let usersArray = [
    {id: 100, name: "John"},
    {id: 765, name: "Bob"},
    {id: 234, name: "Bob"},
    {id: 123, name: "Bob"}
]

// Differences in dealing with array and associative array
const user={id:100500,name:"Ann"}
users[user.id]=user
delete users[user.id]
users[user.id].name="Kate"

const usersCopy=[...usersArray.filter(u=>u.id!==user.id),user]
const usersCopy2=[...usersArray,user]
// usersArray.find(u=>u.id===100).name="Bob"
// let usersArray=usersArray.filter(u=>u.id!==user.id)
