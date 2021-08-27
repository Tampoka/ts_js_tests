import {GovernmentBuildingsType} from "../02-tests/02_02";

export const getStreetTitlesOfGovernmentBuildings= (buildings: Array<GovernmentBuildingsType>)=>{
return buildings.map(b=>b.address.street.title)
}