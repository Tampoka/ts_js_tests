import {usersType, UserType} from "./08_01";

let users:usersType

let usersArray:Array<UserType>

beforeEach(()=>{
    users={
        '100': {id: 100, name: "John"},
        '765': {id: 765, name: "Bob"},
        '234': {id: 234, name: "Kate"},
        '123': {id: 123, name: "Ann"}
    }
    usersArray = [
        {id: 100, name: "John"},
        {id: 765, name: "Bob"},
        {id: 234, name: "Kate"},
        {id: 123, name: "Ann"}
    ]
})

test('should update corresponding user',()=>{
    users['123'].name="Galya"
    expect(users['123']).toEqual({id:123, name:"Galya"})
    delete users['234']
    expect(users['234']).toBeUndefined()
    const user= {id:654, name:"Alex"}
    const user2= {id:234, name:"Kate"}
    users[user.id]=user
    expect(users['654']).toStrictEqual({id:654, name:"Alex"})

    let usersArrayUpdated=[...usersArray,user]
    expect(usersArrayUpdated.length).toBe(5)
    // usersArray.find(u=>u.id===user.id).name="Who"
    let usersArrayUpdated2=usersArray.filter(u=>u.id!==user2.id)
    expect(usersArrayUpdated2.length).toBe(3)
})
