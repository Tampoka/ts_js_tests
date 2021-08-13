import {CityType, GovernmentBuildingsType} from "../02-tests/02_02";

export const demolishHousesOnTheStreet= (city: CityType, streetName: string)=>{
    city.houses=city.houses.filter(house=>house.address.street.title!==streetName)
}

export const getBuildingsWithStaffCountGreaterThan= (buildings: Array<GovernmentBuildingsType>, staffCount: number)=>{
return buildings.filter(building=>building.staffCount>150)
}