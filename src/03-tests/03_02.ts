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