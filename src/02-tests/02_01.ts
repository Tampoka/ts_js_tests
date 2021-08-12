type TechType = {
    id: number
    title: string
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

 const student: StudentType = {
    name: "Bob",
    age: 34,
    isActive: false,
    address: {
        streetTitle: "Vesennya",
        city: {
            title: "London",
            countryTitle: "Great Britain"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        }, {
            id: 3,
            title: "JS"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[0].title)