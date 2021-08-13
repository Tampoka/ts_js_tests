
import {CityType} from "../02-tests/02_02";
import {addMoneyToBudget} from "./03_02";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
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

test('Budget should be changed for "HOSPITAL"',()=>{
    addMoneyToBudget(city.governmentBuildings[0],100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('Budget should be changed for "FIRE-STATION"',()=>{
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})