import {GovernmentBuildingsType} from "../02-tests/02_02";

export const addMoneyToBudget= (building: GovernmentBuildingsType, budget: number)=>{
    building.budget+=budget
}
