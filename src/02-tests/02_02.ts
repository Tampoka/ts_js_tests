export type StreetType={
    title:string
}
export type  GovernmentBuildingsType={

}
export type AddressType={
    number:number
    street:StreetType
}
export type HouseType = {
    builtAt: number
    repaired: boolean
    address:AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings:Array<GovernmentBuildingsType>
    citizensNumber:number
}