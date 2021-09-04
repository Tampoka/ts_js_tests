import React from "react";

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
    title:string
    man:ManType
}
export const ManComponent: React.FC<PropsType> = (props) => {
    return <div>
        <h1>{props.title}</h1>
        <hr/>
        <div>{props.man.name}</div>
    </div>
}