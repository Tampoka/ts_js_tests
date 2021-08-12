import {StudentType} from "../02-tests/02_01";
import {addSkill} from "./03_01";

let student:StudentType
beforeEach(()=>{
    student={
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
})

test("new tech skill should be added to student", ()=>{
    addSkill(student,"JS")
})