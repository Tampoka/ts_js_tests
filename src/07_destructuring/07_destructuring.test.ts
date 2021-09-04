type LessonType = {
    title: string
}
type ManType = {
    name: string
    age: number
    // lessons: Array<{ title: string }>
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}
let props: ManType
beforeEach(() => {
    props = {
        name: "John",
        age: 34,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Main st."
            }
        }
    }
})
test("", () => {

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
    expect(l.length).toBe(2)
})