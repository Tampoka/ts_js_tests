import {GovernmentBuildingsType, HouseType} from "../02-tests/02_02";

export const getStreetTitlesOfGovernmentBuildings= (buildings: Array<GovernmentBuildingsType>)=>{
return buildings.map(b=>b.address.street.title)
}

export const getStreetTitlesOfHouses= (houses: Array<HouseType>)=>{
    return houses.map(h=>h.address.street.title)
}