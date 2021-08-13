import {CityType} from "../02-tests/02_02";

export const demolishHousesOnTheStreet= (city: CityType, streetName: string)=>{
    city.houses=city.houses.filter(house=>house.address.street.title!==streetName)
}