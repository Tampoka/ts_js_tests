import {StudentType} from "../02-tests/02_01";

export const sum=(a:number,b:number)=>{
    return a+b
}
const res=sum(sum(1,2),sum(3,5))


export const addSkill=(st: StudentType, skill:string)=>{
st.technologies.push({id:new Date().getTime(),
    title:skill})
}

export const makeStudentActive=(s:StudentType)=>{
    s.isActive=true
}