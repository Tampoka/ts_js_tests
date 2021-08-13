import {CityType, GovernmentBuildingsType, HouseType} from "../02-tests/02_02";

export const addMoneyToBudget= (building: GovernmentBuildingsType, budget: number)=>{
    building.budget+=budget
}

export const repairHouse= (house: HouseType)=>{
    house.repaired=true
}

export const toFireStaff= (building: GovernmentBuildingsType, staff: number)=>{
    building.staffCount+=staff
}

export const toHireStaff= (building: GovernmentBuildingsType, staff: number)=>{
    building.staffCount-=staff
}

export const createMessage= (city: CityType)=>{
    // return "Hello "+city.title+" citizens.I want you to be happy.All "+city.citizensNumber+" men."
    return `Hello ${city.title} citizens.I want you to be happy.All ${city.citizensNumber} men.`
}