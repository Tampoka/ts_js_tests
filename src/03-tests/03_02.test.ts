
import {CityType} from "../02-tests/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03_02";


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

test('Budget should be changed for "HOSPITAL"',()=>{
    addMoneyToBudget(city.governmentBuildings[0],100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('Budget should be changed for "FIRE-STATION"',()=>{
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('Houses should be  repaired',()=>{
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBe(true);
})

test('staff should be increased',()=>{
    toFireStaff(city.governmentBuildings[0],20)
    expect(city.governmentBuildings[0].staffCount).toBe((220))
})

test('staff should be decreased',()=>{
    toHireStaff(city.governmentBuildings[1],60)
    expect(city.governmentBuildings[1].staffCount).toBe((40))
})