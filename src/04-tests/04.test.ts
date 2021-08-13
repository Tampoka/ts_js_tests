test("should take old men older than 99",()=>{
    const ages = [12, 67, 43, 92, 104]
    // const predicate = (age: number) => {
    //     return age > 99
    // }
// const oldAges=ages.filter(predicate);
    const oldAges=ages.filter((age)=>age>99)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(104)
})

test("should take courses cheaper than 250",()=>{
    const courses = [
        {
            title: "JS",
            price: 240
        },
        {
            title: "CSS",
            price: 120
        }, {
            title: "REACT",
            price: 390
        }
    ]
    const coursePredicate=(course:CourseType)=>{
        return course.price<250
    }
    const cheapCourses=courses.filter(course=>course.price<250)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("JS")
    expect(cheapCourses[1].title).toBe("CSS")
})