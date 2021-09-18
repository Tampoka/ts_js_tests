import {makeHairCut, moveUser, UserType, UserWithLaptopType} from "./10_01";

test('immutable change test', () => {
    const user = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London"
        }
    }
    const awesomeUser = makeHairCut(user, 2)
    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "London",
            street:"Central str."
        },
        laptop: {
            title: "ZenBook"
        }
    }
    const movedUser = moveUser(user, "Paris")

    expect(user.hair).toBe(32)
    expect(movedUser.laptop).toEqual({title: "ZenBook"})
    expect(user.address).toEqual({city: "London",street:"Central str."})
    expect(movedUser.address).toEqual({city: "Paris",street:"Central str."})
    expect(movedUser.address).not.toBe(user.address)
})