import React from 'react'

// const callback=():number=>{
//     alert('hey')
//     return 12
// }
// window.setTimeout(callback,2000)

export const User=()=>{
    const deleteUser=()=>{
        alert('user has been deleted')
    }
    const saveUser=()=>{
        alert('user has been saved')
    }
    return <div>John
    <button onClick={deleteUser}>delete</button>
    <button onClick={saveUser}>save</button>
    </div>
}