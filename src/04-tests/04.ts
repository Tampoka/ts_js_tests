const ages = [12, 67, 43, 92, 104]
const predicate = (age: number) => {
    return age > 99
}
const oldAges = [104]

type CourseType = {
    title: string
    price: number
}
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
const cheapCourses = [
    {
        title: "CSS",
        price: 120
    },
    {
        title: "JS",
        price: 240
    }

]