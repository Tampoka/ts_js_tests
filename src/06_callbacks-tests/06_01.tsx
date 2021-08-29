import React, {ChangeEvent, MouseEvent} from 'react'

// const callback=():number=>{
//     alert('hey')
//     return 12
// }
// window.setTimeout(callback,2000)

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }
    const saveUser = () => {
        alert('user has been saved')
    }
    const onTextChanged = () => {
        console.log('text changed')
    }
    const onFocusLostHandler = () => {
        console.log('focus lost')
    }
    const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }
    return <div>
        <textarea onChange={onTextChanged} onBlur={onFocusLostHandler}>John</textarea>
        <hr/>
        <input onChange={onInputValueChange}/>
        <hr/>
        <button name="delete" onClick={deleteUser}>x</button>
        <button name="save" onClick={deleteUser}>x</button>
    </div>
}