function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address:{
        city:string
    }
}

test('reference type test', () => {
    const user = {
        name: "John",
        age: 45,
        address:{
            city:"Paris"
        }
    }

    increaseAge(user)

    expect(user.age).toBe(46)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)

})
test('array test', () => {
    const users = [
        {
            name: "John",
            age: 45
        },
        {
            name: "Bob",
            age: 22
        }
    ]
    const admins=users
    admins.push({name:"Dangerous", age:10})

    expect(users[2]).toEqual({name:"Dangerous", age:10})
})
test('(primitive) value reference test', () => {
    let usersCount=100
    let adminsCount=usersCount
   adminsCount=adminsCount+1
    expect(usersCount).toBe(100)
})

test('(object) reference type test', () => {
    const address={
        city:"London"
    }
    const user:UserType = {
            name: "John",
            age: 45,
        address:address
        }
    const user2:UserType = {
        name: "Kate",
        age: 23,
        address:address
    }
    user2.address.city="London City"
    expect(user.address).toBe(user2.address)
    expect(user.address.city).toBe("London City")
})

test('(array) reference type test', () => {
    const address={
        city:"London"
    }
    const user:UserType = {
        name: "John",
        age: 45,
        address:address
    }
    const user2:UserType = {
        name: "Kate",
        age: 23,
        address:address
    }
    const users=[user, user2,{name:"Ann",age:19, address:address}]
    const admins=[user, user2]
    admins[0].name="Alex"

    expect(users[0].name).toBe("Alex")
    expect(user.name).toBe("Alex")
})

test('sort array test', () => {
   const letters=['c','b','a','z']
    letters.sort()
    expect(letters).toEqual(['a','b','c','z'])
})

test('find test', () => {
    const users = [
        {
            name: "John",
            age: 45
        },
        {
            name: "Bob",
            age: 22
        }
    ]
   const user=users.find(u=>u.age===45)
    // user?user.name="Kate":""
    expect(users[0].name).toBe("Kate")
})