import {StudentType} from "../02-tests/02_01";
import {addSkill, makeStudentActive} from "./03_01";

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
    expect(student.technologies.length).toBe(3)
    addSkill(student,"JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active",()=>{
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})