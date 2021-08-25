export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: "Bob Smart", age: 33},
    {name: "John Dow", age: 52},
    {name: "Ann Dell", age: 27}
]

const dimychTransformator=(man:ManType)=>{
    return {
        stack:["css","html","js","tdd","react"],
        firstName:man.name.split(" ")[0],
        lastName:man.name.split(" ")[1]
    }
}

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
const dev2=[
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]