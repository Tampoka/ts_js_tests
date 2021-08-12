import {CityType} from "./02_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [],
        governmentBuildings: [],
        citizensNumber: 1000000
    }
})

//01.Create type CityType
//02.Fill city object with properties to pass tests
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].builtAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("white street")

    expect(city.houses[1].builtAt).toBe(2000)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy street")

    expect(city.houses[2].builtAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(100)
    expect(city.houses[2].address.street.title).toBe("Happy street")
})

//01. Add type GovernmentBuildingType
//02.Fill city object with properties to pass tests
test.skip("city should contain hospital and fire station",()=>{

})