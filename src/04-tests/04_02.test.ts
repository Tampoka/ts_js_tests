import {CityType} from "../02-tests/02_02";
import {demolishHousesOnTheStreet} from "./04_02";


let city: CityType;

beforeEach(() => {
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

test("Houses should be destroyed", ()=>{
    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})