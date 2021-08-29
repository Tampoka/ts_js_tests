import React from 'react'

// const callback=():number=>{
//     alert('hey')
//     return 12
// }
// window.setTimeout(callback,2000)

export const User = () => {
    const deleteUser = () => {
        alert('user has been deleted')
    }
    const saveUser = () => {
        alert('user has been saved')
    }
    const onTextChanged = () => {
        console.log('text changed')
    }
    return <div><textarea onChange={onTextChanged}>John</textarea>
        <div onClick={deleteUser}>delete</div>
        <div onClick={saveUser}>save</div>
    </div>
}