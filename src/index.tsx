import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitIntoWords} from "./01-happy-tests/01"
import {sum} from "./03-tests/03_01";

const sentence = "Hello my friend!"
const result = splitIntoWords(sentence)
console.log(result[0]==="hello")
console.log(result[1]==="my")
console.log(result[2]==="friend")

const a=sum
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
