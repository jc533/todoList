import React, {useState,useEffect} from "react"
import store from "../store.js";
import {create, update} from "../action.js";
import {Provider, connectAdvanced} from "react-redux";
import {connect} from "redux";
import { Checkbox } from "@material-ui/core";
// function Blocks(){
//     const numbers = new Array(9).fill(new Array(9).fill(0))
//     const [Ele,setEle] = useState(<h1>hi</h1>);
//     numbers.map((row,index)=>{
        
//     })
//     return (
//         <div>{Ele}</div>
//     )
// }
const TodoInput = () => {
    const [todoText, setTodo] = useState("");
    const sendTodo = (e) => {
        e.preventDefault();
        // console.log(todoText);
        todoText==="" ? alert("no empty string") : store.dispatch(create(todoText));
        setTodo("");
    }
    return (
        <form onSubmit={sendTodo}>
            <input type="text" value={todoText} onChange={(e)=>{setTodo(e.target.value)}}/>
            <input type="submit" onClick={sendTodo}/>
        </form>
    );
}
const TodoItem = (props) => {
    const [editing,setEditing] = useState(false);
    const [text,setText] = useState(props.text)
    const [checked,setChecked] = useState(props.checked);
    const check = (e) => {
        console.log(checked,e.target.checked)
        setChecked(e.target.checked);
        console.log(checked,e.target.checked)
        store.dispatch(update(props.id,{text:text,checked:checked}))
    }
    const sendTodo = (e) => {
        e.preventDefault();
        let obj = {text,checked}
        text==="" ? alert("no empty string") : store.dispatch(update(props.id,text));
        setEditing(0);
    }
    return ( 
        <li>
            <form onSubmit={sendTodo}>
            <input type="checkbox" onChange={check} checked={checked}/>
            <input value={text} onChange={(e)=>setText(e.target.value)} hidden={!editing}/>{editing ? "" : text}
            <input onClick={()=>setEditing(1)} hidden={editing} type="button" value="edit"/>
            <input type="submit" hidden={!editing}/>
            <input onClick={()=>{}} type="button" value="delete"/>
            </form>
        </li>
    )
}
const TodoList = () => {
    const [message, setMsg] = useState(store.getState().texts);
    useEffect(()=>store.subscribe(()=>{setMsg(store.getState().texts)}))
    const updateMsg = () => {

    } 
    let listEle = (
        <ul>
            {message.map((obj,id)=>{
                return <TodoItem text={obj.text} key={id} id={id} checked={obj.checked}/>
            })}
        </ul>
    );
    return message !== [] ? listEle : (<div></div>)
}

const MainPage = () => (
    <Provider store={store}>
        <div>
            <TodoInput/>
            <TodoList/>
        </div>
    </Provider>
);



export default MainPage;