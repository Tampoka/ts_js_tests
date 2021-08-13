test("should take old men older than 99", () => {
    const ages = [12, 67, 43, 92, 104]
    // const predicate = (age) => {
    //     return age > 99
    // }
// const oldAges=ages.filter(predicate);
    const oldAges = ages.filter((age) => age > 99)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(104)
})

test("should take courses cheaper than 250", () => {
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

    const cheapCourses = courses.filter(course => course.price < 250)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("JS")
    expect(cheapCourses[1].title).toBe("CSS")
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Buy bread", isDone: true},
        {id: 2, title: "Learn React", isDone: false},
        {id: 3, title: "Learn JS", isDone: false},
        {id: 4, title: "Buy broccoli", isDone: true},
        {id: 5, title: "Check homework", isDone: true},
    ]
    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(3)
    expect(completedTasks[0].title).toBe("Buy bread")
    expect(completedTasks[1].title).toBe("Buy broccoli")
    expect(completedTasks[2].title).toBe("Check homework")

})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Buy bread", isDone: true},
        {id: 2, title: "Learn React", isDone: false},
        {id: 3, title: "Learn JS", isDone: false},
        {id: 4, title: "Buy broccoli", isDone: true},
        {id: 5, title: "Check homework", isDone: true},
    ]
    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].title).toBe("Learn React")
    expect(uncompletedTasks[1].title).toBe("Learn JS")

})