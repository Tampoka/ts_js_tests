import {createGreetingMessage, ManType} from "./05_01";

let people:Array<ManType>=[]

beforeEach(()=>{
    people = [
        {name: "Bob Smart", age: 33},
        {name: "John Dow", age: 52},
        {name: "Ann Dell", age: 27}
    ]
})

test("should get array of greeting messages",()=>{
    const messages=createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello, Bob ! Welcome to IT-Incubator.")
    expect(messages[1]).toBe("Hello, John ! Welcome to IT-Incubator.")
    expect(messages[2]).toBe("Hello, Ann ! Welcome to IT-Incubator.")

})