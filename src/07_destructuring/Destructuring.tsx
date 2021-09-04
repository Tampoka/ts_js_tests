import React, {useState} from "react";

export type LessonType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    // lessons: Array<{ title: string }>
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

function useMyOwnState(m:string) {
    return [m,function (){}]
}

export const ManComponent: React.FC<PropsType> = (props) => {
    const {title,man,...restProps}=props

    const [message,setMessage]=useMyOwnState("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{man.name}</div>
        <div>{restProps.car}</div>
    </div>
}