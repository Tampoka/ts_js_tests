import React from 'react';
import './App.css';

function App() {

    const names=["Bob","Ann","John","Alex"]
    // const liElements=names.map((n,i)=>
    //     <li key={i}><button>{i}</button>Welcome onboard. I am {n}.</li>)
    const users=[{id:1,name:"Bob",age:54}, {id:321,name:"Ann",age:90}, {id:743,name:"John",age:43}, {id:762,name:"Alex",age:23}]
    const liElements=users.map((u)=>
        <li key={u.id}><button>{u.id}</button>My name is {u.name}, <span>I am {u.age} years old</span></li>)
  return (
    <div className="App">
        <ul>
            {liElements}
        </ul>
    </div>
  );
}

export default App;
