import {CityType} from "../02-tests/02_02";
import {getStreetTitlesOfGovernmentBuildings, getStreetTitlesOfHouses} from "./05_02";

let city:CityType;

beforeEach(()=>{
    city = {
        title: "New York",
        houses: [
            {
                id:1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id:2,
                builtAt: 2000,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id:3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            }

        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 100,
                address: {
                    street: {
                        title: "South str"
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

//01.
test("list of streets titles of government buildings",()=>{
    let streets=getStreetTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe("Central str")
    expect(streets[1]).toBe("South str")

})
test("list of streets titles",()=>{
    let streets=getStreetTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")

})