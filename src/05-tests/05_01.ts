export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: "Bob Smart", age: 33},
    {name: "John Dow", age: 52},
    {name: "Ann Dell", age: 27}
]

const dimychTransformator=(man:ManType)=> (  {
        stack:["css","html","js","tdd","react"],
        firstName:man.name.split(" ")[0],
        lastName:man.name.split(" ")[1]
    })


const devs=[
    {
        stack:["css","html","js","tdd","react"],
        firstName:"Bob",
        lastName:"Smart"
    },
    {
        stack:["css","html","js","tdd","react"],
        firstName:"John",
        lastName:"Dow"
    },
    {
        stack:["css","html","js","tdd","react"],
        firstName:"Ann",
        lastName:"Dell"
    },
]
let d1=dimychTransformator(people[0])
let d2=dimychTransformator(people[1])
let d3=dimychTransformator(people[2])
const dev2=
    // [d1,d2,d3]
    [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const dev3=people.map(dimychTransformator)
const dev4=people.map(man=>({
        stack:["css","html","js","tdd","react"],
        firstName:man.name.split(" ")[0],
        lastName:man.name.split(" ")[1]
    }))

// const messages=people.map(man=>`Hello, ${man.name.split(" ")[0]} ! Welcome to IT-Incubator.`)
export const createGreetingMessage=(people:Array<ManType>)=>{
    return people.map(man=>`Hello, ${man.name.split(" ")[0]} ! Welcome to IT-Incubator.`)
}