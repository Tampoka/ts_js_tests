import {ManType} from "./Destructuring";

let props: ManType
beforeEach(() => {
    props = {
        name: "John",
        age: 34,
        lessons: [{title: "1"}, {title: "2"},{title: "3"}],
        address: {
            street: {
                title: "Main st."
            }
        }
    }
})
test("destructuring object", () => {

    // const age=props.age
    // const lessons=props.lessons

    const {age, lessons, address: {street: {title}}} = props

    // const title=props.address.street.title
    // const {title}=props.address.street

    const a = props.age
    const l = props.lessons

    expect(age).toBe(34)
    expect(title).toBe("Main st.")
    expect(lessons.length).toBe(2)

    expect(a).toBe(34)
    expect(l.length).toBe(3)
})

test("destructuring array", () => {
    const l1=props.lessons[0]
    const l2=props.lessons[1]

    const [,ls2]=props.lessons
    const [les1,...restLessons]=props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    // expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
    expect(restLessons.length).toBe(2)

})